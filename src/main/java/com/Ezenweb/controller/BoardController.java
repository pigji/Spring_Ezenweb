package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.BcategoryDto;
import com.Ezenweb.domain.dto.BoardDto;
import com.Ezenweb.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // @Controller + @ResponseBody
@RequestMapping("/board")   // 공통 URL
public class BoardController {

    // 컨트롤 역할 : HTTP 요청 / model and view 응답

    //------------------ 1. 전역변수 --------------------//
    // 1. 서비스 메소드 호출을 위한 객체 생성[ IoC : 제어역전 ]
        // 1. 개발자가 new 연산자를 사용해서 JVM 힙 메모리 할당해서 객체 생성. [ 주소값 할당해서 사용 ]
            // private BoardService boardService = new BoardService();
        // 2. @Autowired 어노테이션을 이용해서 Spring 컨테이너에 빈[메모리] 생성

    @Autowired // 의존성 주입
    private BoardService boardService = new BoardService();

    //------------------ 2. 페이지 요청 로드[ view ] --------------------//
    // 1. 게시물목록 페이지 열기
    @GetMapping("/list")     // URL : http://localhost:8080/board/list 요청시 해당 html 반환
    public Resource getlist(){ return new ClassPathResource("templates/board/list.html"); }
    // 2. 게시물쓰기 페이지 열기
    @GetMapping("/write")    // URL : http://localhost:8080/board/write 요청시 해당 html 반환
    public Resource getwrite(){ return new ClassPathResource("templates/board/write.html"); }
    // 3. 게시물조회 페이지 열기
    @GetMapping("/view")     // URL : http://localhost:8080/board/view 요청시 해당 html 반환
    public Resource getview(){ return new ClassPathResource("templates/board/view.html"); }
    // 4. 게시물수정 페이지 열기
    @GetMapping("/update")   // URL : http://localhost:8080/board/update 요청시 해당 html 반환
    public Resource getupdate(){ return new ClassPathResource("templates/board/update.html"); }

    //------------------ 3. 요청과 응답 처리[ model ] --------------------//
        // 1.  HTTP 요청 메소드 매핑 : @PostMapping, @GetMapping, @DeleteMapping, @PutMapping
        // 2.  HTTP 데이터 요청 메소드 매핑 : @RequestBody, @RequestParam
    // 1. 게시물쓰기 [ 첨부파일 ]
    @PostMapping("/setboard")
    public boolean setboard( @RequestBody BoardDto boardDto ){
        System.out.println( boardDto.toString() );  // 확인
        return boardService.setboard( boardDto );
    }

    // 2. 게시물 목록 조회 [ 페이징처리, 검색 ]
    @GetMapping("/boardlist")
    public List<BoardDto> boardlist( @RequestParam("bcno") int bcno ){
        return boardService.boardlist( bcno );
    }

    // 3. 게시물 개별 조회
    @GetMapping("/getboard")
    public BoardDto getboard( @RequestParam("bno") int bno ){
        return boardService.getboard( bno );
    }

    // 4. 게시물 삭제
    @DeleteMapping("/delboard")
    public boolean delboard( @RequestParam("bno") int bno ){
        return boardService.delboard( bno );
    }

    // 5. 게시물 수정 [ 첨부파일 ]
    @PutMapping("/upboard")
    public boolean upboard( @RequestBody BoardDto boardDto ){
        return boardService.upboard( boardDto );
    }

    // 6. 카테고리 등록
    @PostMapping("/setbcategory")
    public boolean setbcategory( @RequestBody BcategoryDto bcategoryDto ){
        return boardService.setbcategory(bcategoryDto);
    }

    // 7. 모든 카테고리 출력
    @GetMapping("/bcategorylist")
    public List<BcategoryDto> bcategorylist(){
        return boardService.bcategorylist();
    }

} // class end
