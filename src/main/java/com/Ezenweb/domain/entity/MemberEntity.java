package com.Ezenweb.domain.entity;

import com.Ezenweb.domain.dto.MemberDto;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity // 해당 연결된 DB의 테이블과 매핑[연결]
@Table( name="member")  // DB에서 사용될 테이블명
@NoArgsConstructor
@AllArgsConstructor
@Getter  @Setter  @ToString  @Builder
public class MemberEntity {

    // 1. 필드
    @Id // 엔티티당 무조건 1개 이상 [ PK값 의미 = 식별 값 ]
    @GeneratedValue( strategy = GenerationType.IDENTITY ) // 자동번호 부여
    private int mno;    // 회원번호 필드

    @Column( nullable = false ) // not null 과 같은 의미
    private String memail;  // 회원이메일 = 회원아이디 역할

    @Column( nullable = false ) // not null
    private String mpassword;   // 회원 비밀번호

    @Column( nullable = false ) // not null
    private String mphone;      // 회원 전화번호 필드


    // 2. 생성자 [ 롬복으로 사용 ]
    // 3. 메소드 [ 롬복으로 사용 ]

    // * 엔티티 --> DTO로 변경
    public MemberDto toDto(){
        return MemberDto
                .builder()  // 빌더 메소드 시작
                .mno( this.mno )
                .memail( this.memail )
                .mpassword( this.mpassword )
                .build();    // 빌드 메소드 끝
    }


} // class end
