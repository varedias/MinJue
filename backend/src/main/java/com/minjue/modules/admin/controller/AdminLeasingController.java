package com.minjue.modules.admin.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.leasing.entity.OmsLeasing;
import com.minjue.modules.leasing.service.OmsLeasingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

/**
 * 租赁设备管理Controller
 */
@Tag(name = "Admin Leasing Management")
@RestController
@RequestMapping("/api/admin/leasing")
@RequiredArgsConstructor
public class AdminLeasingController {

    private final OmsLeasingService leasingService;

    @Operation(summary = "获取租赁设备列表")
    @GetMapping("/list")
    public Result<IPage<OmsLeasing>> getList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String name) {

        Page<OmsLeasing> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<OmsLeasing> wrapper = new LambdaQueryWrapper<>();

        if (StringUtils.hasText(type)) {
            wrapper.eq(OmsLeasing::getType, type);
        }
        if (status != null) {
            wrapper.eq(OmsLeasing::getStatus, status);
        }
        if (StringUtils.hasText(name)) {
            wrapper.like(OmsLeasing::getName, name);
        }
        wrapper.orderByDesc(OmsLeasing::getCreateTime);

        IPage<OmsLeasing> result = leasingService.page(pageParam, wrapper);
        return Result.success(result);
    }

    @Operation(summary = "获取租赁设备详情")
    @GetMapping("/{id}")
    public Result<OmsLeasing> getDetail(@PathVariable Long id) {
        OmsLeasing leasing = leasingService.getById(id);
        if (leasing == null) {
            return Result.error(404, "设备不存在");
        }
        return Result.success(leasing);
    }

    @Operation(summary = "创建租赁设备")
    @PostMapping("/create")
    public Result<String> create(@RequestBody OmsLeasing leasing) {
        leasing.setCreateTime(LocalDateTime.now());
        leasing.setUpdateTime(LocalDateTime.now());
        if (leasing.getStatus() == null) {
            leasing.setStatus(1);
        }
        if (leasing.getLeased() == null) {
            leasing.setLeased(0);
        }
        leasingService.save(leasing);
        return Result.success("创建成功");
    }

    @Operation(summary = "更新租赁设备")
    @PutMapping("/{id}")
    public Result<String> update(@PathVariable Long id, @RequestBody OmsLeasing leasing) {
        OmsLeasing existing = leasingService.getById(id);
        if (existing == null) {
            return Result.error(404, "设备不存在");
        }
        leasing.setId(id);
        leasing.setUpdateTime(LocalDateTime.now());
        leasingService.updateById(leasing);
        return Result.success("更新成功");
    }

    @Operation(summary = "删除租赁设备")
    @DeleteMapping("/{id}")
    public Result<String> delete(@PathVariable Long id) {
        OmsLeasing leasing = leasingService.getById(id);
        if (leasing == null) {
            return Result.error(404, "设备不存在");
        }
        leasingService.removeById(id);
        return Result.success("删除成功");
    }

    @Operation(summary = "更新设备状态")
    @PostMapping("/status")
    public Result<String> updateStatus(@RequestBody Map<String, Object> params) {
        Long id = Long.valueOf(params.get("id").toString());
        Integer status = Integer.valueOf(params.get("status").toString());

        OmsLeasing leasing = leasingService.getById(id);
        if (leasing == null) {
            return Result.error(404, "设备不存在");
        }

        leasing.setStatus(status);
        leasing.setUpdateTime(LocalDateTime.now());
        leasingService.updateById(leasing);

        return Result.success(status == 1 ? "已上架" : "已下架");
    }
}
