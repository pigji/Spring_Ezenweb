package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.IcategoryDto;
import com.Ezenweb.domain.dto.IndexDto;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryEntity;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryRepository;
import com.Ezenweb.service.index.IndexlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/index")   // 공통 URL
public class IndexController {
    /* 과제 - 비회원제게시판 */

    // 1. 전역변수
    @Autowired
    private IndexlistService indexlistService ;

    // --------------------- 2. 페이지 요청( view )  -------------------- //
    // 1. 게시물 목록 페이지 열기
    @GetMapping("/list")    // http://localhost:8080/index/list
    public Resource getlist(){
        return new ClassPathResource("templates/index/list.html");
    }


    // --------------------- 3. 요청과 응답 ( model ) ----------------------- //
    // 1. 게시물 쓰기
    @PostMapping("/setboard")
    public boolean setboard( @RequestBody IndexDto indexDto ){
        System.out.println( indexDto.toString() );
        return indexlistService.setboard( indexDto );
    }

    // 2. 게시물 목록조회
    @GetMapping("/boardlist")
    public List<IndexDto> boardlist( @RequestParam("icno") int icno ){
        return indexlistService.boardlist( icno );
    }

    // 3. 게시물 개별 조회
    @GetMapping("/getboard")
    public IndexDto getboard( @RequestParam("ino") int ino ){
        return indexlistService.getboard( ino ); }

    // 4. 카테고리 등록
    @PostMapping("/setbcategory")
    public boolean setbcategory( @RequestBody IcategoryDto icategoryDto ){
        System.out.println( icategoryDto );
        return indexlistService.setbcategory( icategoryDto );
    }

    // 5. 모든 카테고리 출력
    @GetMapping("/icategorylist")
    public List<IcategoryDto> icategorylist(){
        return indexlistService.icategorylist();
    }

    // 6. 게시물 삭제
    @DeleteMapping("/delboard")
    public boolean delboard( @RequestParam("ino") int ino ){ return indexlistService.delboard( ino ); }

    // 7. 게시물 수정
    @PutMapping("/upboard")
    public boolean upboard( @RequestBody IndexDto indexDto ){ return indexlistService.upboard( indexDto );}



} // class end
