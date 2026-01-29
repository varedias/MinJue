package com.minjue.modules.system.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@TableName("pms_product")
public class PmsProduct implements Serializable {
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private Long supplierId;

    private Long categoryId;

    private String name;

    private BigDecimal price;

    private BigDecimal originalPrice;

    private Integer stock;

    private String image;

    private String album;

    private String description;

    private String specs;

    /** 状态: 1-上架, 0-下架 */
    private Integer status;

    private Integer sales;

    private Integer views;

    private LocalDateTime createTime;
}
