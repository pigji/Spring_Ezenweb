package com.Ezenweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

// p.11
@SpringBootApplication  // 스프링 웹을 위한 기본설정 어노테이션 [ 1.MVC  2.내장서버  3.RESTFUL  4. 웹 설정 ]
@EnableJpaAuditing      // JPA 감시 [ 생성, 변경 ]    // p.242
public class WebStart {
    public static void main(String[] args) { // main 스레드

        SpringApplication.run( WebStart.class );
            // 스프링 어플리케이션 실행 ( 현재클리스명.class )


    } // main end

} // class end

/*
    1. extend : 상속 [ 설계도 물려받는다. 1개만 가능 ]
    2. @ 어노테이션 [ 여러개 가능 ]
        1. 내장 : @override : 부모로부터 상속 메소드를 재정의 할때 사용
        2. 메타 : 빌드[실행] 할때 자동적으로 코드가 생성
        
            2. @SpringBootApplication : 컴포넌트 스캔
                컴포넌트를 사용하는 클래스들을 스캔 빈[ 스프링 메모리 ] 등록
                    1. @Controller
                    2. @RestController
 */
