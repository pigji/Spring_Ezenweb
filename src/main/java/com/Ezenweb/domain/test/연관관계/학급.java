package com.Ezenweb.domain.test.연관관계;

import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

public class 학급 {
    // pk
    String 학급명;
    @OneToMany
    List<학생> 학생리스트 = new ArrayList<>();

} // class end