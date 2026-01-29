package com.minjue.modules.admin.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.system.entity.SysUser;
import com.minjue.modules.system.service.SysUserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Admin User Management")
@RestController
@RequestMapping("/api/admin/user")
@RequiredArgsConstructor
public class AdminUserController {

    private final SysUserService sysUserService;

    @Operation(summary = "获取用户列表")
    @GetMapping("/list")
    public Result<IPage<SysUser>> getUserList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) String username) {

        Page<SysUser> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<SysUser> queryWrapper = new LambdaQueryWrapper<>();

        if (StringUtils.hasText(username)) {
            queryWrapper.like(SysUser::getUsername, username)
                    .or().like(SysUser::getNickname, username);
        }

        queryWrapper.orderByDesc(SysUser::getCreateTime);

        IPage<SysUser> result = sysUserService.page(pageParam, queryWrapper);
        // Descale password
        result.getRecords().forEach(u -> u.setPassword(null));

        return Result.success(result);
    }

    @Operation(summary = "更新用户状态(封禁/解封)")
    @PutMapping("/{userId}/status")
    public Result<String> updateUserStatus(
            @PathVariable Long userId,
            @RequestParam Integer status) {

        SysUser user = sysUserService.getById(userId);
        if (user == null) {
            return Result.error(404, "用户不存在");
        }

        // Prevent banning Admin itself
        if ("ADMIN".equals(user.getRole())) {
            return Result.error(403, "无法更改管理员状态");
        }

        user.setStatus(status);
        sysUserService.updateById(user);
        return Result.success(status == 1 ? "用户已解封" : "用户已封禁");
    }
}
