package com.Ezenweb.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController2 {
    @GetMapping("/")
    public Resource getindex(){
        return new ClassPathResource("templates/index.html");
    }

}
