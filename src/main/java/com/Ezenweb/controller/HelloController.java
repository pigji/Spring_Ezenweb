package com.Ezenweb.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// p.49 ~ 51
@RestController // 현재 클래스를 스프링에 RestController 사용
public class HelloController {
    // 클라이언트[사용자] 요청, 응답 수행공간
    // 실제 데이터 처리[가공] 이나 로직[기능] => DAO 또는 서비스에서 처리하자
    // JSP 패키지[폴터] HTTP URL     vs  Spring RESTful
    @RequestMapping("/hello")
    public String Hello() {
        return "Hello World";
    }
}