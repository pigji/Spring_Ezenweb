package com.Ezenweb.domain.dto;

import lombok.*;

// lombok : 생성자, get/set , toString, 빌더패턴
@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString @Builder
public class BoardDto {

    private String btitle;
    private String bcontent;


} // clas end
