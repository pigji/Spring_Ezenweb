package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.index.IndexlistEntity;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder
public class IcategoryDto {
    // 비회원제 카테고리 Dto

    private int icno;       // 카테고리 번호
    private String icname;  // 카테고리 이름

    public IndexcategoryEntity toEntity(){
        return IndexcategoryEntity
                .builder()
                .icno( this.icno )
                .icname( this.icname )
                .build();
    }

} // class end
