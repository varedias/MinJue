package com.minjue.modules.leasing.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 租赁设备实体
 */
@Data
@TableName("oms_leasing")
public class OmsLeasing implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.AUTO)
    private Long id;

    /** 设备名称 */
    private String name;

    /** 租赁类型: financing-融资租赁, operating-经营租赁 */
    private String type;

    /** 设备图片URL */
    private String image;

    /** 设备描述 */
    private String description;

    /** 供应商名称 */
    private String supplier;

    /** 供应商ID */
    private Long supplierId;

    /** 月租金 */
    private BigDecimal monthlyPrice;

    /** 设备总价(融资租赁) */
    private BigDecimal totalPrice;

    /** 租期 */
    private String duration;

    /** 日租金(经营租赁) */
    private BigDecimal dailyPrice;

    /** 周租金(经营租赁) */
    private BigDecimal weeklyPrice;

    /** 服务优势(JSON数组) */
    private String benefits;

    /** 标签(JSON数组) */
    private String tags;

    /** 已租次数 */
    private Integer leased;

    /** 评分 */
    private BigDecimal rating;

    /** 状态: 1-上架, 0-下架 */
    private Integer status;

    /** 创建时间 */
    private LocalDateTime createTime;

    /** 更新时间 */
    private LocalDateTime updateTime;
}
