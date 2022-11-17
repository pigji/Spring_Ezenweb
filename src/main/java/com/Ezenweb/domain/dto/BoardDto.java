package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.BoardEntity;
import lombok.*;

// lombok : 생성자, get/set , toString, 빌더패턴
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class BoardDto {

    // 생성자
    private int bno;
    private String btitle;
    private String bcontent;
    private int bview;
    private String bfile;
    private int mno;
    private int cno;

    // 1. 형변환
    public BoardEntity toEntity() {
        // * 생성자를 이용한 객체 생성 [ *빌더패던 비교 ]
            // 입력한 생성자 순서 지키기! [ 순서 안지키면 오류 발생 ]
        return new BoardEntity( this.bno, this.btitle, this.bcontent,
                this.bview, this.bfile, this.mno, this.cno );

    }

} // clas end
