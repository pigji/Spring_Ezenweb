package com.Ezenweb.domain.entity.index;

import com.Ezenweb.domain.dto.IndexDto;
import com.Ezenweb.domain.entity.BaseEntity;
import com.Ezenweb.domain.entity.indexcategory.IndexcategoryEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Table( name = "Indexlist" ) // 테이블명 정의
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter @ToString @Builder
public class IndexlistEntity extends BaseEntity {

    // 1. 필드
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY )
    private int ino;    // 게시물 번호
    @Column( nullable = false ) // not null

    private String iname; // 작성자 이름
    @Column( nullable = false) // not null

    private String ititle;  // 게시물 제목
    @Column( nullable = false, columnDefinition = "TEXT" ) // not null

    private String icontent; // 게시물 내용
    @Column( nullable = false ) // not null
    @ColumnDefault( "0" )

    private String ifile;


    // 연관관계 [ 카테고리번호[pk] <-- 양방향 --> 게시물번호[fk]
    @ManyToOne
    @JoinColumn(name="icno")
    private IndexcategoryEntity indexcategoryEntity;

    // 형변환
    public IndexDto toDto(){
        return IndexDto.builder()
                .ino( this.ino )
                .iname( this.iname )
                .ititle( this.ititle )
                .icontent( this.icontent )
                .build();
    }

} // class end
