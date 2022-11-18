package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.board.BoardEntity;
import lombok.*;

// lombok : 생성자, get/set , toString, 빌더패턴
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class BoardDto {

    // 생성자
    private int bno;            // 게시물번호
    private String btitle;      // 게시물제목
    private String bcontent;    // 게시물내용
    private int bview;          // 조회수
    private String bfile;       // 첨부파일
    private int mno;            // 작성자[ 회원번호 - fk ]
    private int bcno;            // 카테고리[ 카테고리 - fk ]
    private String memail;      // 회원아이디

    // 1. 형변환
    public BoardEntity toEntity() {
        // * 생성자를 이용한 객체 생성 [ *빌더패던 비교 ]
            // 입력한 생성자 순서 지키기! [ 순서 안지키면 오류 발생 ]
        return BoardEntity.builder()
                .bno( this.bno )
                .btitle( this.btitle )
                .bcontent( this.bcontent )
                .bfile( this.bfile )
                .bview( this.bview )
                .build();
    }

} // clas end
