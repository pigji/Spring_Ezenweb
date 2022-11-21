package com.Ezenweb.domain.test.연관관계2;

import lombok.ToString;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.ArrayList;
import java.util.List;
@ToString
public class 이미지 {
    String 이미지명;
    @ManyToOne
    @JoinColumn(name = "제품명")
    @ToString.Exclude
    제품 제품;  // 주인

} // class end
