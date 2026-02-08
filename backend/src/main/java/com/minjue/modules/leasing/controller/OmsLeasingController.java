package com.minjue.modules.leasing.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.leasing.entity.OmsLeasing;
import com.minjue.modules.leasing.entity.OmsLeasingApplication;
import com.minjue.modules.leasing.service.OmsLeasingApplicationService;
import com.minjue.modules.leasing.service.OmsLeasingService;
import com.minjue.modules.system.entity.SysUser;
import com.minjue.modules.system.service.SysUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;

/**
 * 用户端租赁设备Controller
 */
@Tag(name = "Leasing API")
@RestController
@RequestMapping("/api/v1/leasing")
@RequiredArgsConstructor
public class OmsLeasingController {

    private final OmsLeasingService leasingService;
    private final OmsLeasingApplicationService applicationService;
    private final SysUserService sysUserService;

    @Operation(summary = "获取租赁设备列表（用户端）")
    @GetMapping("/list")
    public Result<IPage<OmsLeasing>> getList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "12") Integer size,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer status) {

        Page<OmsLeasing> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<OmsLeasing> wrapper = new LambdaQueryWrapper<>();

        // 默认只显示上架设备
        if (status != null) {
            wrapper.eq(OmsLeasing::getStatus, status);
        } else {
            wrapper.eq(OmsLeasing::getStatus, 1);
        }

        // 类型筛选
        if (StringUtils.hasText(type)) {
            wrapper.eq(OmsLeasing::getType, type);
        }

        // 关键词搜索
        if (StringUtils.hasText(name)) {
            wrapper.like(OmsLeasing::getName, name);
        }

        wrapper.orderByDesc(OmsLeasing::getLeased);

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

    // ==================== 租赁申请接口 ====================

    @Operation(summary = "提交租赁申请")
    @PostMapping("/apply")
    public Result<String> apply(@RequestBody OmsLeasingApplication application, Principal principal) {
        if (principal == null) {
            return Result.error(401, "请先登录");
        }
        SysUser user = sysUserService.getOne(
            new LambdaQueryWrapper<SysUser>().eq(SysUser::getUsername, principal.getName())
        );
        if (user == null) {
            return Result.error(401, "用户不存在");
        }

        // 验证设备是否存在
        OmsLeasing leasing = leasingService.getById(application.getLeasingId());
        if (leasing == null) {
            return Result.error(404, "租赁设备不存在");
        }

        application.setUserId(user.getId());
        application.setStatus(0); // 待审核
        application.setCreateTime(LocalDateTime.now());
        application.setUpdateTime(LocalDateTime.now());
        applicationService.save(application);
        return Result.success("申请已提交，请等待审核");
    }

    @Operation(summary = "获取我的租赁申请")
    @GetMapping("/applications")
    public Result<IPage<OmsLeasingApplication>> getMyApplications(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            Principal principal) {

        if (principal == null) {
            return Result.error(401, "请先登录");
        }
        SysUser user = sysUserService.getOne(
            new LambdaQueryWrapper<SysUser>().eq(SysUser::getUsername, principal.getName())
        );
        if (user == null) {
            return Result.error(401, "用户不存在");
        }

        Page<OmsLeasingApplication> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<OmsLeasingApplication> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(OmsLeasingApplication::getUserId, user.getId())
               .orderByDesc(OmsLeasingApplication::getCreateTime);

        IPage<OmsLeasingApplication> result = applicationService.page(pageParam, wrapper);
        return Result.success(result);
    }
}
