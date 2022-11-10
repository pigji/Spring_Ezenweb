package com.Ezenweb.controller;

import com.Ezenweb.domain.Dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api/v1/get-api")  // 요청 URL 정의하기[ 만들기 ]   //
public class GetController {
    // 해당 클래스 접근[호출/요청] : http://localhost:8080/api/v1/get-api
        // 해당 클래스내 메소드 호출 : http://localhost:8080/api/v1/get-api/hello

    // 1. p.56 ~ 57
    @RequestMapping( value = "/hello" , method = RequestMethod.GET ) // get 요청
    public String getHello(){   // 함수명[ 아무거나 / 중복x ]
        return "Hello World"; // response 응답
    }
        // @RequestMapping
            // 1. GetMapping
                // @RequestMapping( value = "/hello" , method = RequestMethod.GET ) // get 요청
            // 2. PostMapping( value = "/hello")
            // 3. PutMapping("/hello")
            // 4. DeleteMapping

        // 2. @GetMapping [ p. 58 ]
        @GetMapping("/name")    //  http://localhost:8080/api/v1/get-api/name
        public  String getName(){
            return "Flature";
        }

        // 3. @PostMapping [ p.59 ] http://localhost:8080/api/v1/get-api/variable1/{variable}
        // 주의 : 경로상의 변수명[ {variable} ]과 @PathVariable 매개변수[ variable ]
        @GetMapping("/variable1/{variable}")    // 경로상의 변수[값]
        public String getVariable1( @PathVariable String variable ){
            return variable;
        }

        // 4. [ p.60 ]
        @GetMapping("/variable2/{variable}")
        public String getVariable2( @PathVariable( value = "variable") String test ){
            return test;
        }
        // @Pathvariable : http://localhost:8080/api/v1/get-api/variable2/지혜
        // vs
        // @RequestMapping[ ? 사용할때 ] : http://localhost:8080/api/v1/get-api/variable3?variable=지혜!

        // 4-2 [ 비교 ]
        @GetMapping("/variable3")
        public String getVariable3( @RequestParam( value = "variable") String test ){
            return test;
        }

        // 5. [ p.61 ]  http://localhost:8080/api/v1/get-api/variable1/request1?name=지혜&email=qwe@ane.com&organization=qerqerq
        @GetMapping("/request1")    // ? 변수명=값1 & 변수명2 = 값2 & 변수명3 = 값3 [ 실제 입력할때 띄어쓰기x ]
        public String getRequstParam1( @RequestParam String name, @RequestParam String email, @RequestParam String organizetion){
            return name + " " + email + " " + organizetion;
            // http://localhost:8080/api/v1/get-api/variable1/request1?name=qwe&email=qwe@wod&organization=qerqerq
        }

        // 6. [ p.62 ] http://localhost:8080/api/v1/get-api/request2
        @GetMapping("/request2")
        public String getRequstParam2( @RequestParam Map< String, String > param){
            return param.toString();
        }
        /*
            java 컬렉션 프레임워크
                1. list : 인덱스[중복가능]   2. set : 인덱스x[중복불가능]    3. map : 인덱스x[ 키: 값 ] 엔트리 사용
            js
                1. JSON

         */

        // 7. [ p.66 ]  http://localhost:8080/api/v1/get-api/request3
        @GetMapping("/request3")
        public String getRequstParam3(MemberDto memberDto ){
            return memberDto.toString();
        }

} // class end
