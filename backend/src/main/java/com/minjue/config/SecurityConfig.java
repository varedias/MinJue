package com.minjue.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@lombok.RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth -> auth
                        // 公开接口
                        .requestMatchers(
                                "/api/v1/user/login",
                                "/api/v1/user/register",
                                "/api/v1/captcha/**",
                                "/api/v1/email/**",
                                "/api/v1/product/**",
                                "/api/v1/category/**",
                                "/api/v1/supplier/**",
                                "/api/v1/content/**",
                                "/doc.html",
                                "/webjars/**",
                                "/v3/api-docs/**",
                                "/swagger-resources/**",
                                "/favicon.ico")
                        .permitAll()
                        // 管理员登录接口公开
                        .requestMatchers("/api/admin/login").permitAll()
                        // 管理后台接口需要 ADMIN 角色
                        .requestMatchers("/api/admin/**").hasRole("ADMIN")
                        // 其他接口需要认证
                        .anyRequest().authenticated())
                .addFilterBefore(jwtAuthenticationTokenFilter,
                        org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
