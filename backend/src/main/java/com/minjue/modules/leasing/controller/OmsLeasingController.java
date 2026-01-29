package com.minjue.modules.leasing.controller;

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

/**
 * 用户端租赁设备Controller
 */
@Tag(name = "Leasing API")
@RestController
@RequestMapping("/api/leasing")
@RequiredArgsConstructor
public class OmsLeasingController {

    private final OmsLeasingService leasingService;

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
}
