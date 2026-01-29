package com.minjue.modules.admin.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.product.entity.PmsProduct;
import com.minjue.modules.product.service.PmsProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Admin Product Management")
@RestController
@RequestMapping("/api/admin/product")
@RequiredArgsConstructor
public class AdminProductController {

    private final PmsProductService pmsProductService;

    @Operation(summary = "获取商品列表")
    @GetMapping("/list")
    public Result<IPage<PmsProduct>> getProductList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) String name) {

        Page<PmsProduct> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<PmsProduct> queryWrapper = new LambdaQueryWrapper<>();

        if (StringUtils.hasText(name)) {
            queryWrapper.like(PmsProduct::getName, name);
        }

        queryWrapper.orderByDesc(PmsProduct::getCreateTime);

        IPage<PmsProduct> result = pmsProductService.page(pageParam, queryWrapper);
        return Result.success(result);
    }

    @Operation(summary = "强制下架商品")
    @PutMapping("/{productId}/off-shelf")
    public Result<String> offShelfProduct(@PathVariable Long productId) {
        PmsProduct product = pmsProductService.getById(productId);
        if (product == null) {
            return Result.error(404, "商品不存在");
        }

        // 0: 下架/违规
        product.setStatus(0);
        pmsProductService.updateById(product);

        return Result.success("商品已强制下架");
    }
}
