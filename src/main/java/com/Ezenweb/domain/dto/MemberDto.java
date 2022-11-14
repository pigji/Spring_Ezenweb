package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.MemberEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder

public class MemberDto {

    private int mno;
    private String memail;
    private String mpassword;

    // * dto ---> entity 변환
    public MemberEntity toEntity() {
        return MemberEntity.builder()
                .mno(this.mno)
                .memail(this.memail)
                .mpassword(this.mpassword)
                .build();
    }

} // class end


    // 1. 빈생성자 =>   @NoArgsConstructor
    // public MemberDto(){ }
    // 2.풀생성자 =>    @AllArgsConstructor
    /*
    public MemberDto(int mno, String memail, String mpassword) {
        this.mno = mno;
        this.memail = memail;
        this.mpassword = mpassword;
    }
    */
    
    // 3. get / set =>  @Getter @Setter
        // [ private 필드 외부 간접접근용 메소드  ]
    // 4. toString => @ToString
        // [ 객체주소 => 객체내 필드 데이터 확인용 ]



