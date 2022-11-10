package Ezenweb.controller;


import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController // 해당 클래스가 controller 임을 명시 [ 스프링부트  scan ]
@RequestMapping("/test1") // URL 경로 정의 : http://localhost:8080/test1
public class Test1Controller {

    //    @GetMapping("")    // http://localhost:8080/test1
    //    public String gettext(){
    //        return "test1.html";
    //    }
    @GetMapping("")    // http://localhost:8080/test1
    public Resource gettext(){
        return new ClassPathResource("test1.html");
    }
    // 반환타입 : 문자열   String
    // 반환타입 : HTML    템플릿 없이 html 반환
    // 반환타입 : Resource
    // 반환값 : new ClassPathResource("html경로");
    // 프로젝내 resource 폴더 부터 경로 시작
    // import org.springframework.core.io.Resource;
}
