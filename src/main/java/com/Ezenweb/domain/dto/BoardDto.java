package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.board.BoardEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

// lombok : 생성자, get/set , toString, 빌더패턴
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class BoardDto {

    // 생성자
    private int bno;            // 게시물번호
    private String btitle;      // 게시물제목
    private String bcontent;    // 게시물내용
    private int bview;          // 조회수
    private MultipartFile bfile;       // 첨부파일
        // spring : MultipartFile
        // jsp : con 라이브러리

    private String bfilename;      // 첨부파일[ 호출용 ]
    private int bcno;            // 카테고리[ 카테고리 - fk ]
    private String memail;      // 회원아이디

    private int startbtn;
    private int endbtn;

    // 1. 형변환
    public BoardEntity toEntity() {
        // * 생성자를 이용한 객체 생성 [ *빌더패던 비교 ]
            // 입력한 생성자 순서 지키기! [ 순서 안지키면 오류 발생 ]
        return BoardEntity.builder()
                .bno( this.bno )
                .btitle( this.btitle )
                .bcontent( this.bcontent )
                .bview( this.bview )
                .build();
    }

} // clas end
