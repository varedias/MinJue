package com.minjue.modules.product.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.minjue.common.result.Result;
import com.minjue.modules.product.entity.PmsProduct;
import com.minjue.modules.product.service.PmsProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Product Management")
@RestController
@RequestMapping("/api/v1/product")
@RequiredArgsConstructor
public class PmsProductController {

    private final PmsProductService productService;

    @Operation(summary = "Get Product List with Search & Filter")
    @GetMapping("/list")
    public Result<Page<PmsProduct>> list(
            @RequestParam(defaultValue = "1") Integer page,
            @RequestParam(defaultValue = "10") Integer size,
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) Long categoryId) {
        Page<PmsProduct> pageResult = productService.listProducts(page, size, keyword, categoryId);
        return Result.success(pageResult);
    }

    @Operation(summary = "Get Product Detail")
    @GetMapping("/{id}")
    public Result<PmsProduct> getById(@PathVariable Long id) {
        PmsProduct product = productService.getById(id);
        if (product != null) {
            // 增加浏览量
            product.setViews(product.getViews() == null ? 1 : product.getViews() + 1);
            productService.updateById(product);
        }
        return Result.success(product);
    }

    @Operation(summary = "Create Product")
    @PostMapping
    public Result<String> create(@RequestBody PmsProduct product) {
        productService.save(product);
        return Result.success("Created successfully");
    }

    @Operation(summary = "Update Product")
    @PutMapping
    public Result<String> update(@RequestBody PmsProduct product) {
        productService.updateById(product);
        return Result.success("Updated successfully");
    }

    @Operation(summary = "Delete Product")
    @DeleteMapping("/{id}")
    public Result<String> delete(@PathVariable Long id) {
        productService.removeById(id);
        return Result.success("Deleted successfully");
    }
}
