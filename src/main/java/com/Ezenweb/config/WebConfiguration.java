package com.Ezenweb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter {
    // WebMvcConfigurerAdapter : 스프링 mvc 설정 변경 클래스
    // 1. 스프링 아키텍처엥서 사용되는 컨트롤 핸들러뷰 경로 바꾸자.
        // 스프링 아키텍처 뷰 검색 --> controller

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // super.addViewControllers(registry);
        registry.addViewController("/{spring:\\w+}").setViewName("forward:/");
        registry.addViewController("/**/{spring:\\w+}").setViewName("forward:/");
        registry.addViewController("/{spring:\\w+}/**{spring:?!(\\.js|\\.css)$}") .setViewName("forward:/");
    }
} // class end

