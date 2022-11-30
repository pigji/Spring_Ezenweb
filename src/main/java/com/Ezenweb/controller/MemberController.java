package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.MemberDto;
import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")  // 요청 포트 변경 어노테이션
@RestController // Restful api 사용하는 controller 명시 + @ResponseBody
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

    @PostMapping("/setmember") // 1. 회원가입 기능
    public int setmember( @RequestBody MemberDto memberDto  ){
        int result = memberService.setmember( memberDto ); // 1. 서비스[ 비지니스 로직 ] 호출
        return result;  // 2. 반환
    }
//    @PostMapping("/getmember")  // 2. 로그인 기능[ 시큐리티 사용시 필요없음 ]
//    public int getmember( @RequestBody MemberDto memberDto ){
//        int result = memberService.getmember( memberDto );
//        return result;
//    }
    @GetMapping("/getpassword")     // 3. 비밀번호 찾기
    public String getpassword( @RequestParam("memail") String memail ){
        String result = memberService.getpassword( memail );
        return result;
    }
    @DeleteMapping("/setdelete")    // 4. 회원탈퇴
    public int setdelete( @RequestParam("mpassword") String mpassword ){
        // 1. 서비스처리
        int result = memberService.setdelete( mpassword );
        // 2. 서비스결과 반환
        return result;
    }
    @PutMapping("/setupdate")       // 5. 수정하기
    public int setupdate( @RequestParam("mpassword") String mpassword ){
        int result = memberService.setupdate( mpassword );
        return result;
    }

    @GetMapping("/getloginMno") // 6. 로그인 정보 확인
    public String getloginMno(){
        String result = memberService.getloginMno();
        return result;
    }

//    @GetMapping("/logout")      // 7. 로그아웃
//    public boolean logout(){
//        //System.out.println("test");
//        boolean result = memberService.logout();
//        return result;
//    }

    @GetMapping("/list")        // 8. 회원목록
    @ResponseBody
    public List<MemberDto> list(){
        List<MemberDto> list = memberService.list();
        System.out.println("확인" + list );
        return list;
    }

    @GetMapping("/getauth")     // 9. 이메일 인증
    public String gotauth(  ){
        return memberService.getauth( "이메일주소 입력" );
        // return "1234"
    }


} // clas end
