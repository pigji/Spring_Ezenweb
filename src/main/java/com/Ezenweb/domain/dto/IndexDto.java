package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.index.IndexlistEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder
public class IndexDto {

    // 생성자
    private int ino;          // 게시물 번호
    private String iname;     // 작성자 이름
    private String ititle;    // 게시물 제목
    private String icontent;  // 게시물 내용
    private String ifile;     // 첨부파일

    private int icno;         // 카테고리 번호

    // 형변환
    public IndexlistEntity toEntity() {
        return IndexlistEntity.builder()
                .ino( this.ino )
                .iname( this.iname )
                .ititle( this.ititle )
                .icontent( this.icontent )
                .ifile( this.ifile )
                .build();
    }

} // class end
