package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.BaseEntity;
import com.Ezenweb.domain.entity.bcategory.BcategoryEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter  @Setter @ToString @Builder
public class BcategoryDto {

    private int bcno;
    private String bcname;

    public BcategoryEntity toEntity(){
        return BcategoryEntity
                .builder()
                .bcno( this.bcno )
                .bcname( this.bcname )
                .build();
        // this : 해당 메소드를 호출하는 객체의 필드 호출시 사용되는 키워드
    }

} // class end
