package com.minjue.modules.system.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName("oms_supplier")
public class OmsSupplier implements Serializable {
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String name;

    private String logo;

    private String description;

    private String contactInfo;

    /** 认证状态: 0-待审核, 1-已认证, 2-审核拒绝 */
    private Integer isVerified;

    private LocalDateTime createTime;

    private Long userId;
}
