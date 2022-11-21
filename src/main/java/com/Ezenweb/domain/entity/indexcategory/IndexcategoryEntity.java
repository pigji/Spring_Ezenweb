package com.Ezenweb.domain.entity.indexcategory;

import com.Ezenweb.domain.dto.IcategoryDto;
import com.Ezenweb.domain.entity.index.IndexlistEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity @Table(name = "indexcategory")
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder
public class IndexcategoryEntity extends BaseEntity{
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int icno;       // 카테고리 번호
    private String icname;  // 카테고리 이름

    @OneToMany( mappedBy = "indexcategoryEntity")
    @Builder.Default
    private List<IndexlistEntity> indexlistEntityList = new ArrayList<>();

    public IcategoryDto toDto(){
        return IcategoryDto.builder()
                .icno( this.icno )
                .icname( this.icname )
                .build();
    }

} // class end
