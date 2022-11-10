package Ezenweb.controller;

import Ezenweb.domain.Dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/get-api")
public class GetController {
    // 해당 클래스 접근[호출/ 요청 ] : http://localhost:8080/api/v1/get-api
        // 해당 클래스내 메소드 호출 : http://localhost:8080/api/v1/get-api/hello

    // 1. [ p.57 ]
    @RequestMapping( value = "/hello" , method = RequestMethod.GET )
    public String getHello(){
        return "해당 메소드로 들어왔다.";
    }

    // @RequestMapping
    // 1. GetMapping
    // @RequestMapping( value = "/hello" , method = RequestMethod.GET ) // get 요청
    // @GetMapping( value = "/hello" )
    // @GetMapping( "/hello" )
    // 2. PostMapping
    // 3. PutMapping
    // 4. DeleteMapping

    // 2. p.58 @GetMapping
    @GetMapping("/name") // http://localhost:8080/api/v1/get-api/name
    public String getName(){
        return "Flature";
    }

    // 3. p.59
    // 주의 : @GetMapping 경로상의 변수명[ {variable} ] 과 @PathVariable 매개변수[ variable ]
    @GetMapping("/variable1/{variable}") // 경로상의 변수[값]
    public String getVariable1( @PathVariable String variable ){
        return variable;
    }

    // 4. p.60
    @GetMapping("/variable2/{variable}")
    public String getVariable2( @PathVariable( value = "variable") String test ){
        return test;
    }
    // [변수1개 ]
    // @PathVariable : http://localhost:8080/api/v1/get-api/variable2/하하하하
    // VS
    // [ 변수여러게 => 키:값 ]
    // @RequestParam : http://localhost:8080/api/v1/get-api/variable3?variable=하하하하

    // 4-2 [ 비교 ]
    @GetMapping("/variable3")
    public String getVariable3( @RequestParam(value ="variable" ) String test ){
        return test;
    }

    // 5. p.61
    @GetMapping("/requst1") //   URL ? 변수명=값1 & 변수명2 = 값2 & 변수명3 = 값3
    public String getRequstParam1(
            @RequestParam String name , @RequestParam String email , @RequestParam String organization ){
        return name +" " + email +" " + organization;
    }
    // http://localhost:8080/api/v1/get-api/requst1?name=qwe&email=qwe@qwe&organization=qweqweqwe

    // 6. p.62
    @GetMapping("/requst2")
    public String getRequstParam2(@RequestParam Map< String , String > param ){
        return  param.toString();
    }
    /*
        java 컬렉션 프레임워크
            1. list : 인덱스[중복가능] , set:인덱스x[중복불가능] , map:인덱스x[ 키 : 값 ] 엔트리 사용
        js
            1. JSON
     */
    // 7. p.66 http://localhost:8080/api/v1/get-api/requst1?name=qwe&email=qwe@qwe&organization=qweqweqwe
    @GetMapping("/requst3")
    public String getRequstParam3(MemberDto memberDto ){
        return memberDto.toString();
    }

}
