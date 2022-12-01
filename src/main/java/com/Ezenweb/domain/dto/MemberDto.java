package com.Ezenweb.domain.dto;

import com.Ezenweb.domain.entity.member.MemberEntity;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter @ToString @Builder

public class MemberDto implements UserDetails, OAuth2User {

    private int mno;
    private String memail;
    private String mpassword;
    private String mphone;
    private Set<GrantedAuthority> authorities; // 인증 권한 [토큰]
    // GrantedAuthority : 권한[토큰]
    private Map<String, Object> attributes; // oauth2 인증 결과

    // * dto ---> entity 변환
    public MemberEntity toEntity(){
        return MemberEntity.builder()
                .mno(this.mno)
                .memail(this.memail)
                .mpassword(this.mpassword)
                .mphone(this.mphone)
                .build();
    }
    public void setAuthorities(Set<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return this.mpassword;
    }

    @Override
    public String getUsername() {
        return this.memail;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


    //
    @Override
    public String getName() {
        return this.memail;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return this.attributes;
    }

} // class end


    // 1. 빈생성자 =>   @NoArgsConstructor
    // public MemberDto(){ }
    // 2.풀생성자 =>    @AllArgsConstructor
    /*
    public MemberDto(int mno, String memail, String mpassword) {
        this.mno = mno;
        this.memail = memail;
        this.mpassword = mpassword;
    }
    */
    
    // 3. get / set =>  @Getter @Setter
        // [ private 필드 외부 간접접근용 메소드  ]
    // 4. toString => @ToString
        // [ 객체주소 => 객체내 필드 데이터 확인용 ]



