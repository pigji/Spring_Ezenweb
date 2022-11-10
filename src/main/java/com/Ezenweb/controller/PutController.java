package com.Ezenweb.controller;

import com.Ezenweb.domain.Dto.MemberDto;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/put-api")
public class PutController {

    // 1. [ p.70 ]      @ResponseBody 생략 기능 -> ResponseBody [ application ]
    @RequestMapping(value = "member")
    public String puMember(@RequestBody Map<String, String> putData ){
        return putData.toString();
    }

    // 2. [ p.71 ]      반환타입 : 문자열 [String]
    @PutMapping("/member1")
    public String postMemberDto( @RequestBody MemberDto memberDto ){
        return memberDto.toString();
    }

    // 2-2 [ p.72 ]     반환타입 : DTO [ MemberDto ]
    @PutMapping("/member2")
    @ResponseBody
    public MemberDto postMemberDto2( @RequestBody MemberDto memberDto ){
        return memberDto;
    }

} // class end
