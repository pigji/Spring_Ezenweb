package Ezenweb.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// p.49
@RestController // 현재클래스를 스프링의 RestController 사용
public class HelloController {

    // 클라이언트[사용자] 요청 , 응답 수행 공간
    // 실제 데이터 처리[가공] 이나 로직[기능] => DAO 나 서비스 하자
    // JSP 패키지[폴더] HTTP URL    vs Spring RESTful
    @RequestMapping("/hello1")
    public String Hello1(){
        return "Hello World";
    }
}
