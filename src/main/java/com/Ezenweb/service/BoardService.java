package com.Ezenweb.service;

import com.Ezenweb.domain.dto.BoardDto;
import com.Ezenweb.domain.entity.board.BoardEntity;
import com.Ezenweb.domain.entity.board.BoardRepository;
import com.Ezenweb.domain.entity.member.MemberEntity;
import com.Ezenweb.domain.entity.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service // 컴포넌트 [  Spring MVC ]
public class BoardService {

    //------------------ 1. 전역변수 --------------------//
    @Autowired
    private HttpServletRequest request; // 요청 객체 선언
    @Autowired
    private MemberRepository memberRepository;  // 회원 리포지토리 객체 선언
    @Autowired
    private BoardRepository boardRepository;    // 게시물 리포지토리 객체 선언
        // @Transactional : 엔티티 DML 적용할때 사용되는 어노테이션
        // 1. 메소드
            /*
                1. insert : boardRepository.save( 엔티티 )         BoardEntity entity
                2. select : boardRepository.findAll()             List<BoardEntity> elist
                3. select : boardRepository.findById( pk번호 )     Optional<BoardEntity>
                4. delete : boardRepository.delete( 엔티티 )
             */

    // ------------------ 2. 서비스 기능 -----------------//
    // 1. 게시물 쓰기
    @Transactional        // ( 자료형   힙 주소 )
    public boolean setboard( BoardDto boardDto ){   // 1. dto --> entity [ Insert ] 저장된 entity 반환

        // 1. 로그인 정보 확인[ 세션 = loginMno ]
        Object object = request.getSession().getAttribute("loginMno");
        if( object == null ){ return false; }

        // 2. 로그인된 회원번호
        int mno = (Integer)object;
        // 3. 회원번호 --> 회원정보 호출
        Optional<MemberEntity> optional = memberRepository.findById(mno);
        if( !optional.isPresent() ){ return false; }    // 만약에 내용물이 없으면 false 출력
        // 4. 로그인된 회원의 엔티티
        MemberEntity memberEntity = optional.get();

        BoardEntity boardEntity = boardRepository.save( boardDto.toEntity() );
            // 클래스명.메소드명();     // 메소드가 static 일 경우 가능
            // 객체명.메소드명();  //

        // 2. 생성된 entity의 게시물 번호가 0이 아니면
        if( boardEntity.getBno() != 0 ){
            // 5. ** fk 대입
            boardEntity.setMemberEntity( memberEntity );
            // ** 양방향[ pk필드에 fk 연결 ]
            memberEntity.getBoardEntityList().add( boardEntity );
            return true;    // 생성된 entity의 게시물번호가 0이 아니면 성공
        }
        else{ return false; }   // 0이면 entity 생성 실패
    }

    // 2. 게시물 목록 조회
    @Transactional
    public List<BoardDto> boardlist(){
        // 1. 모든 엔티티를 호출한다.
        List<BoardEntity> elist = boardRepository.findAll();
        // 2. 컨트롤에게 전달할때 형변환 [ entity --> DTO ]
        List<BoardDto> dlist = new ArrayList<>();
        // 3. 변환
        for( BoardEntity entity : elist ){ dlist.add( entity.toDto() ); }
        // 4. 변환된 리스트 dlist 반환
        return dlist;
    }

    // 3. 게시물 개별 조회
    @Transactional
    public BoardDto getboard( int bno ){
        // 1. 입력받은 게시물번호로 엔티티 검색 [ Optional ]
        Optional<BoardEntity> optional = boardRepository.findById( bno );
        // 2. Optional 안에 있는 내용물 확인
        if( optional.isPresent() ){
            // 3. 엔티티 꺼내기 .get()
            BoardEntity boardEntity = optional.get();
            return  boardEntity.toDto();    // 4. 형변환 반환
        }else{
            return  null;   // 4. 없으면 null
        }
    }

    // 4. 게시물 삭제
    @Transactional
    public boolean delboard( int bno ){
        Optional<BoardEntity> optional = boardRepository.findById( bno );
        if( optional.isPresent() ){
            BoardEntity entity = optional.get();
            boardRepository.delete( entity );   // 찾은 엔티티를 삭제
            return true;
        }else{ return false; }
    }

    // 5. 게시물 수정 [ 첨부파일 ]
    @Transactional
    public boolean upboard( BoardDto boardDto ) {
        // 1. DTO에서 수장할 PK번호 이용해서 엔티티 찾기
        Optional<BoardEntity> optional = boardRepository.findById(boardDto.getBno());
        // 2.
        if( optional.isPresent() ){
            BoardEntity entity = optional.get();
            // 수정처리 [ 메소드가 별도 존재x 엔티티 <---> 레코드 ]
            entity.setBtitle( boardDto.getBtitle() );
            entity.setBcontent( boardDto.getBcontent() );
            entity.setBfile( boardDto.getBfile() );
            return true;
        }else {
            return false;
        }
    }

} // class end