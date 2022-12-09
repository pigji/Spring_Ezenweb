package com.Ezenweb.config;

import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration  // 설정 컴포넌트 주입
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private MemberService memberService;

    @Override   // 인증( 로그인 ) 관련 메소드 재정의
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService( memberService ).passwordEncoder( new BCryptPasswordEncoder() );
        // MemberService 에서 userDetailsService 구현했기 때문에 가능하다.
            // loadUserByUsername 구현
    }

    @Override   // http 관련 시큐리티 재정의 [ 상속받은 클래스로부터 메소드 재구현 ]
    protected void configure(HttpSecurity http) throws Exception {
        // 모든 HTTP URL 보안설정   // 시큐리티 기본 html  // 주석처리하면 회원가입 안됨.[ http 잠금장치 ]
        //super.configure(http);

        http
                .formLogin()                // 로그인 페이지 보안설정
                    .loginPage("/member/login") // 아이디와 비밀번호를 입력받을 URL[ 로그인 페이지 ]
                    .loginProcessingUrl("/member/getmember") // 로그인을 처리할 URL [ 서비스 --> loadUserByUsername ]
                    .defaultSuccessUrl("/") // 로그인 성공했을때 이동할 URL
                    .failureUrl("/member/login")  // 로그인 실패시 이동할 URL
                    .usernameParameter("memail")     // 아이디 변수명
                    .passwordParameter("mpassword") // 비밀번호 변수명

                .and() // 구분 기능
                    .logout()   // 로그아웃 보안설정
                        .logoutRequestMatcher( new AntPathRequestMatcher("/member/logout")) // 로그아웃 처리할 URL 정의
                        .logoutSuccessUrl("/") // 로그아웃 성공했을때 이동할 URL[ 메인페이지 ]
                        .invalidateHttpSession( true )  // 세션 초기화 여부 --> [ principal 초기화 ]

                .and() // 기능 구분
                    .csrf() // 요청 위조
                    .ignoringAntMatchers("/member/getmember")   // 로그인 post 사용  // 해당 URL 요청 방지 해지
                    .ignoringAntMatchers("/member/setmember")  // 회원가입 post 사용
                    .ignoringAntMatchers("/board/setbcategory")  // 카테고리
                    .ignoringAntMatchers("/board/setboard")  // 게시물

                .and() // 기능 구분
                     .oauth2Login() // 소셜 로그인 보안 설정
                     .defaultSuccessUrl("/") // 소셜 로그인 성공시 이동하는 URL
                     .userInfoEndpoint() // Endpoint(종착점) : 소셜 회원정보 들어오는곳
                     .userService( memberService ); // 해당 서비스  loadUser 메소드 구현
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
