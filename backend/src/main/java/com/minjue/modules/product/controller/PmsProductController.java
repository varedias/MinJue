package com.minjue.modules.product.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.product.entity.PmsCategory;
import com.minjue.modules.product.entity.PmsProduct;
import com.minjue.modules.product.service.PmsCategoryService;
import com.minjue.modules.product.service.PmsProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 用户端商品Controller
 */
@Tag(name = "Product API")
@RestController
@RequestMapping("/api/product")
@RequiredArgsConstructor
public class PmsProductController {

    private final PmsProductService productService;
    private final PmsCategoryService categoryService;

    @Operation(summary = "获取商品列表（用户端）")
    @GetMapping("/list")
    public Result<IPage<PmsProduct>> getProductList(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "12") Integer size,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) String sort,
            @RequestParam(defaultValue = "false") Boolean includeOffShelf) {

        Page<PmsProduct> pageParam = new Page<>(page, size);
        LambdaQueryWrapper<PmsProduct> wrapper = new LambdaQueryWrapper<>();

        // 默认只显示上架商品，除非明确要求包含下架商品
        if (!includeOffShelf) {
            wrapper.eq(PmsProduct::getStatus, 1);
        }

        // 关键词搜索
        if (StringUtils.hasText(name)) {
            wrapper.like(PmsProduct::getName, name);
        }

        // 分类筛选
        if (categoryId != null) {
            wrapper.eq(PmsProduct::getCategoryId, categoryId);
        }

        // 排序
        if ("sales".equals(sort)) {
            wrapper.orderByDesc(PmsProduct::getSales);
        } else if ("price-low".equals(sort)) {
            wrapper.orderByAsc(PmsProduct::getPrice);
        } else if ("price-high".equals(sort)) {
            wrapper.orderByDesc(PmsProduct::getPrice);
        } else if ("newest".equals(sort)) {
            wrapper.orderByDesc(PmsProduct::getCreateTime);
        } else {
            // 默认综合排序：销量 + 浏览量
            wrapper.orderByDesc(PmsProduct::getSales)
                   .orderByDesc(PmsProduct::getViews);
        }

        IPage<PmsProduct> result = productService.page(pageParam, wrapper);
        return Result.success(result);
    }

    @Operation(summary = "获取商品详情")
    @GetMapping("/{id}")
    public Result<PmsProduct> getProductDetail(@PathVariable Long id) {
        PmsProduct product = productService.getById(id);
        if (product == null) {
            return Result.error(404, "商品不存在");
        }

        // 增加浏览量
        product.setViews(product.getViews() + 1);
        productService.updateById(product);

        return Result.success(product);
    }

    @Operation(summary = "获取商品分类")
    @GetMapping("/categories")
    public Result<List<PmsCategory>> getCategories() {
        List<PmsCategory> categories = categoryService.list(
            new LambdaQueryWrapper<PmsCategory>()
                .orderByAsc(PmsCategory::getSort)
        );
        return Result.success(categories);
    }
}
