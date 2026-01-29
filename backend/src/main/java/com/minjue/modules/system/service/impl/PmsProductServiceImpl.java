package com.minjue.modules.system.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.minjue.modules.system.entity.PmsProduct;
import com.minjue.modules.system.mapper.PmsProductMapper;
import com.minjue.modules.system.service.PmsProductService;
import org.springframework.stereotype.Service;

@Service
public class PmsProductServiceImpl extends ServiceImpl<PmsProductMapper, PmsProduct> implements PmsProductService {
}
