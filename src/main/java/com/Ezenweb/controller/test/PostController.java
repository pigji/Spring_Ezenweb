package com.Ezenweb.controller.test;

import com.Ezenweb.domain.dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

// p.67
@RestController // 스프링이 해당 클래스를 RestController 임을 빈에 등록
@RequestMapping("/api/v1/post-api") // 공통 URL // 클래스로 들어오는 주소
public class PostController {

    // 1. [ p.68 ]
    @RequestMapping(value = "/domain" , method = RequestMethod.POST)
    public String postExample(){  return "Hello Post API";  }

    // 2. [ p.69 ]
    @PostMapping("/member")
    public String postMember( @RequestBody Map<String , String > postData ){
        return postData.toString();
    }

    // 3. [ p.69 ]
    @PostMapping("/member2")
    public String postMemberDto( @RequestBody MemberDto memberDto ){
        return memberDto.toString();
    }



} // class end
