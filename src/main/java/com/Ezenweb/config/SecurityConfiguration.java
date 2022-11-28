package com.Ezenweb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override   // 재정의 [ 상속받은 클래스로부터 메소드 재구현 ]
    protected void configure(HttpSecurity http) throws Exception {
        // 모든 HTTP URL 보안설정   // 시큐리티 기본 html  // 주석처리하면 회원가입 안됨.[ http 잠금장치 ]
        super.configure(http);

    }
} // class end
/*
    시큐리티 사용방법
        // 1. 그레이들 의존성 추가
            1. implementation 'org.springframework.boot:spring-boot-starter-security' 추가
        // 2. 시큐리티 커스텀[ 기본 설정값 변경 ]
        // @Configuration : 컴포넌트 시리즈 [ @Controller, @Service, @Entity, @
            1. extends WebSecurityConfigurerAdapter 클래스 상속받아서 커스텀 클래스 선언
                 1. configure(HttpSecurity http ) : http 보안 메소드


    시큐리티 기본 값
        1. 해당 프로젝트의 모든 http URL 잠긴다.
            --> 커스텀 : http 권한 없애기
                 @Override   // 재정의 [ 상속받은 클래스로부터 메소드 재구현 ]
                 protected void configure(HttpSecurity http) throws Exception {

                    }

        2. 기본 login 페이지 제공 --> 커스텀 login 페이지 변경 가능
        3. login controller 제공
        4. login service 제공
        -----------------> 커스텀 작업 ----> SecurityConfiguration : 시큐리티 설정 클래스
            // WebSecurityConfigurerAdapter : 웹 시큐리티 설정 클래스
                  // 설정 종류
                      // 1. URL 권한


 */
