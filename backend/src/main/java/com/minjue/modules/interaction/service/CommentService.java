package com.minjue.modules.interaction.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.minjue.modules.interaction.entity.PmsComment;
import com.minjue.modules.interaction.mapper.PmsCommentMapper;
import org.springframework.stereotype.Service;

@Service
public class CommentService extends ServiceImpl<PmsCommentMapper, PmsComment> {
}
