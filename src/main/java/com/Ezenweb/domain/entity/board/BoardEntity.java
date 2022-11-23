package com.Ezenweb.domain.entity.board;

import com.Ezenweb.domain.dto.BoardDto;
import com.Ezenweb.domain.entity.BaseEntity;
import com.Ezenweb.domain.entity.bcategory.BcategoryEntity;
import com.Ezenweb.domain.entity.member.MemberEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity // 엔티티 정의
@Table( name = "board" )    // 테이블명 정의
@AllArgsConstructor // 풀생성자
@NoArgsConstructor  // 빈생성자
@Getter @Setter @ToString @Builder // 롬복
public class BoardEntity extends BaseEntity {

    // 1. 필드
    @Id // pk 값
    @GeneratedValue( strategy = GenerationType.IDENTITY ) // auto
    private int bno;            // 게시물번호
    @Column( nullable = false )     // not null
    private String btitle;      // 게시물제목
    @Column( nullable = false , columnDefinition = "TEXT")     // not null , DB 자료형사용시 columnDefinition = "DB자료형"
    private String bcontent;    // 게시물 내용
    @Column( nullable = false )     // not null
    @ColumnDefault( "0" )           // JPA insert 할 경우 default
    private int bview;          // 조회수
    @Column
    private String bfile;       // 첨부파일


    // 연관관계1 [ 회원번호[pk] <-- 양방향 --> 게시물번호[fk]
    @ManyToOne  // [ 1:n ] FK 에 해당 어노테이션
    @JoinColumn(name="mno") // 테이블에서 사용할 fk의 필드명 정의
    @ToString.Exclude // 해당 필드는 ToString()에서 사용하지 않는다. [ 양방향일때는 필수!!! ]
    private MemberEntity memberEntity;  // PK에 엔티티 객체

    // 연관관계2 [ 카테고리번호[pk] <-- 양방향 --> 게시물번호[fk]
    @ManyToOne  // [ 1:n ] fk 에 해당 어느테이션
    @JoinColumn( name="bcno" )
    @ToString.Exclude
    private BcategoryEntity bcategoryEntity;

    // 작성일,수정일 -> 상속( 여러 엔티티해서 사용되는 필드라서 BaseEntity )


    // 1. 형변환
    public BoardDto toDto(){
        // * 빌더 패턴을 이용한 객체 생성 [ *생성자 비교 ]
        return BoardDto.builder()   // 시작지점
                .bno( this.bno )
                .btitle( this.btitle )
                .bcontent( this.bcontent )
                .bview( this.bview )
                .memail( this.memberEntity.getMemail() )
                .build();           // 끝지점
    }


} // class end
/*
    자바 -----------------------------> DB 자료형
    int                                 int
    double, float                       float
    String                              varchar

            columnDefinition = "DB자료형"
*/
/*
    연관 관계
    @OneToOne       1 : 1   회원이 하나의 게시물만 작성 가능
    @ManyToOne      n : 1   회원이 여러개읙 게시물 작성 가능
    @OneToOne       1 : n
    @ManyToMany     n : n
    @


 */
