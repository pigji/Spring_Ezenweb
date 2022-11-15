package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.MemberDto;
import com.Ezenweb.domain.entity.MemberEntity;
import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController // Restful api 사용하는 controller 명시
@RequestMapping("/member") // 공통 URL 매핑 주소
public class MemberController {
        // 1. 매핑주소 중복불가능    // 2. 함수명 중복불가능
    
    // --------------------------------- 전역 객체  ---------------------------------- //
    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService; // 서비스 객체 생성

    // --------------------------------- HTML 반환 매핑 [ URL 주소 값 ] ---------------------------------- //
    @GetMapping("/signup")  // 프로젝트내 resource -> templates -> member -> signup.html 반환
    public Resource getsignup(){ return new ClassPathResource("templates/member/signup.html");    }
    @GetMapping("/login")
    public Resource getlogin(){
        return new ClassPathResource("templates/member/login.html");
    }
    @GetMapping("/findpassword")
    public Resource findpassword(){
        return new ClassPathResource("templates/member/findpassword.html");
    }
    @GetMapping("/delete")
    public Resource getdelete(){ return new ClassPathResource("templates/member/delete.html");}
    @GetMapping("/update")
    public Resource getupdate(){ return new ClassPathResource("templates/member/update.html");}

    // --------------------------------- 서비스/기능 매핑 ------------------------------------- //

    @PostMapping("/setmember") // 회원가입 기능
    public int setmember( @RequestBody MemberDto memberDto  ){
        int result = memberService.setmember( memberDto ); // 1. 서비스[ 비지니스 로직 ] 호출
        return result;  // 2. 반환
    }
    @PostMapping("/getmember")  // 로그인 기능
    public int getmember( @RequestBody MemberDto memberDto ){
        int result = memberService.getmember( memberDto );
        return result;
    }
    @GetMapping("/getpassword")     // 비밀번호 찾기
    public String getpassword( @RequestParam("memail") String memail ){
        String result = memberService.getpassword( memail );
        return result;
    }
    @DeleteMapping("/setdelete")    // 회원탈퇴
    public int setdelete( @RequestParam("mpassword") String mpassword ){
        // 1. 서비스처리
        int result = memberService.setdelete( mpassword );
        // 2. 서비스결과 반환
        return result;
    }
    @PutMapping("/setupdate")       // 수정하기
    public int setupdate( @RequestParam("mpassword") String mpassword ){
        int result = memberService.setupdate( mpassword );
        return result;
    }

    @GetMapping("/getloginMno")     // 로그인 여부 판단
    public int getloginMno(){
        int result = memberService.getloginMno();
        return result;

    }
    @GetMapping("/logout")
    public boolean logout(){
        System.out.println("test");
        boolean result = memberService.logout();
        return result;
    }


} // clas end
