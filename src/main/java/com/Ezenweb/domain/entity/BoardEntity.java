package com.Ezenweb.domain.entity;

import com.Ezenweb.domain.dto.BoardDto;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity // 엔티티 정의
@Table( name = "board" )    // 테이블명 정의
@AllArgsConstructor // 풀생성자
@NoArgsConstructor  // 빈생성자
@Getter @Setter @ToString @Builder // 롬복
public class BoardEntity {

    // 1. 필드
    @Id // pk 역할
    @GeneratedValue( strategy = GenerationType.IDENTITY )   // auto 자동번호
    private int bno;            // 게시물 번호
    @Column( nullable = false ) // not null

    private String btitle;      // 게시물 제목
    @Column( nullable = false, columnDefinition = "TEXT" ) // not null. DB자료형 사용 : columnDefinition = "DB자료형"

    private String bcontent;    // 게시물 내용
    @Column( nullable = false ) // not null.
    @ColumnDefault( "0" )       // JAP insert 할 경우 default

    private int bview;          // 조회수
    @Column( nullable = false ) // not null

    private String bfile;      // 첨부파일
    @Column( nullable = false ) // not null

    private int mno;            // 작성자 회원번호 - fk
    @Column( nullable = false ) // not null

    private int cno;            // 카테고리 - fk

    // 작성일, 수정일 --> 상속( 여러 엔티티에서 사용되는 필드라서 )

    // 1. 형변환
    public BoardDto toDto(){
        // * 빌더 패턴을 이용한 객체 생성 [ *생성자 비교 ]
        return BoardDto.builder()   // 시작
                .btitle( this.btitle )
                .bcontent( this.bcontent )
                .bfile( this.bfile )
                .bview( this.bview )
                .mno( this.mno )
                .cno( this.cno )
                .build();           // 끝
    }


} // class end
/*
    자바 -----------------------------> DB 자료형
    int                                 int
    double, float                       float
    String                              varchar

            columnDefinition = "DB자료형"

 */
