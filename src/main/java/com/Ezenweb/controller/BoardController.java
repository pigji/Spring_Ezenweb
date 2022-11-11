package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.BoardDto;
import com.Ezenweb.service.BoardService;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@RestController // 스프링 MVC 관리   // 해당 클래스가 컨트롤 목적으로 사용 @Get
@RequestMapping("/board")   // 해당 클래스 안에 있는 Mapping 들의 공통 URL
public class BoardController {
    // ------------------- HTML LOAD URL -----------------
    // 1. 게시물 목록 페이지 열기[ HTML ] 열기
    @GetMapping("/list") // URL 정의하기[ 만들기 ]
    public Resource boardlist() {
        return new ClassPathResource("templates/board/list.html");
                                        // HTML 파일 경로
    }

    // 2. 게시물 쓰기페이지 열기
    @GetMapping("/write") // URL 정의하기
    public Resource write() {
        // Resource : 자료[ HTML, CSS, JS 파일 등 ]  // import org.springframework.core.io.Resource;
        return new ClassPathResource("templates/board/write.html");
    }

    // -----------------------------------------------------------//
    // --------------------- 기능 처리 --------------------------- //
    // 1. 게시물 쓰기 처리 [ 첨부파일 ]

    @PostMapping("/setboard") // URL
    @ResponseBody   // 생략가능
    public boolean setboard(@RequestBody BoardDto boardDto ){
        // 1. DTO 내용 확인
        System.out.println( boardDto.toString() );
        // 2. -------> 서비스[ 비지니스 로직 ] 로 이동
        boolean result = new BoardService().setboard(boardDto);
        // 3. 반환
        return true;    // response
        // Boolean      : Content-Type : application/json
        // String       : Content-Type : text/html; charset=UTF-8
        // Resource     : Content text/html
    }
    // 2. 게시물 목록 보기 처리 [ 페이지, 검색 ]
    @GetMapping("/getboards")
    @ResponseBody   // 생략가능
    public ArrayList<BoardDto> getboards( ){
        // 1. -------> 서비스[ 비지니스 로직 ] 로 이동
        ArrayList<BoardDto> list = new BoardService().getboards();
        // 2. 반환
        return list;
    }
    // 3. 게시물 개별 조회 처리
   // @GetMapping("getboard")
    // 4. 게시물 수정 처리
   // @PutMapping("updateboard")
    // 5. 게시물 삭제 처리
   // @DeleteMapping("/deleteboard")


} // class end
