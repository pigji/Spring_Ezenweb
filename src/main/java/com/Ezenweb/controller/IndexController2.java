package com.Ezenweb.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController2 {
        // 리액시 사용시 사람짐. [ 사용x ] // 여러줄 주석처리 : ctrl + shift + /[주석]
/*
    @GetMapping("/")
    public Resource getindex(){
        return new ClassPathResource("templates/index.html");
    }
*/
}
