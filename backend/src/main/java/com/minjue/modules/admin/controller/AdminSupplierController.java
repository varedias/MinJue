package com.minjue.modules.admin.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.admin.dto.AuditDTO;
import com.minjue.modules.system.entity.SysUser;
import com.minjue.modules.system.service.SysUserService;
import com.minjue.modules.supplier.entity.OmsSupplier;
import com.minjue.modules.supplier.service.OmsSupplierService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Admin Supplier Audit")
@RestController
@RequestMapping("/api/admin/supplier")
@RequiredArgsConstructor
public class AdminSupplierController {

    private final OmsSupplierService supplierService;
    private final SysUserService sysUserService;

    @Operation(summary = "获取待审核供应商列表")
    @GetMapping("/audit/list")
    public Result<IPage<OmsSupplier>> getPendingAuditList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size) {

        // is_verified = 0 (待审核)
        Page<OmsSupplier> pageParam = new Page<>(page, size);
        IPage<OmsSupplier> result = supplierService.page(pageParam,
                new LambdaQueryWrapper<OmsSupplier>().eq(OmsSupplier::getIsVerified, 0));

        return Result.success(result);
    }

    @Operation(summary = "获取所有供应商列表")
    @GetMapping("/list")
    public Result<IPage<OmsSupplier>> getAllList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) Integer status) {

        Page<OmsSupplier> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<OmsSupplier> wrapper = new LambdaQueryWrapper<>();
        if (status != null) {
            wrapper.eq(OmsSupplier::getIsVerified, status);
        }
        wrapper.orderByDesc(OmsSupplier::getCreateTime);
        IPage<OmsSupplier> result = supplierService.page(pageParam, wrapper);

        return Result.success(result);
    }

    @Operation(summary = "获取供应商详情")
    @GetMapping("/{id}")
    public Result<OmsSupplier> getDetail(@PathVariable Long id) {
        OmsSupplier supplier = supplierService.getById(id);
        if (supplier == null) {
            return Result.error(404, "供应商不存在");
        }
        return Result.success(supplier);
    }

    @Operation(summary = "审核供应商")
    @PostMapping("/audit")
    @Transactional(rollbackFor = Exception.class)
    public Result<String> audit(@RequestBody AuditDTO auditDTO) {
        OmsSupplier supplier = supplierService.getById(auditDTO.getId());
        if (supplier == null) {
            return Result.error(404, "供应商不存在");
        }

        if (auditDTO.getPass()) {
            // 通过: 更新供应商状态为 1 (已认证)
            supplier.setIsVerified(1);
            supplierService.updateById(supplier);

            // 升级对应账号角色为 SUPPLIER
            if (supplier.getUserId() != null) {
                sysUserService.update(new com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<SysUser>()
                        .eq(SysUser::getId, supplier.getUserId())
                        .set(SysUser::getRole, "SUPPLIER"));
            }
            return Result.success("审核通过");
        } else {
            // 拒绝: 更新供应商状态为 2 (拒绝)
            supplier.setIsVerified(2);
            supplierService.updateById(supplier);
            return Result.success("已拒绝");
        }
    }
}
