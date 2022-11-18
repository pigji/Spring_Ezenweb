package com.Ezenweb.service;

import com.Ezenweb.domain.dto.MemberDto;
import com.Ezenweb.domain.entity.member.MemberEntity;
import com.Ezenweb.domain.entity.member.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service // 해당 클래스가 Service 명시 // 1. 비지니스 로직 [ 알고리즘 - 기능 ]
public class MemberService {

// --------------------- 전역 객체 ----------------------------
    @Autowired
    private MemberRepository memberRepository;  // 리포지토리 객체
    @Autowired // 스프링 컨테이너[ 메모리 ] 위임
    private HttpServletRequest request;          // 요청 객체
    // 메일전송 객체
    @Autowired
    private JavaMailSender javaMailSender;

// ---------------------- 서비스 메소드 --------------------------
    // 1. 회원가입
    public int setmember(MemberDto memberDto ){
        // 1. DAO 처리 [ dto --> entity
        MemberEntity entity = memberRepository.save( memberDto.toEntity() );
            // memberRepository.save( 엔티티 객체 ) : 해당 엔티티 객체가 insert 생성된 엔티티객체 반환
        // 2. 결과 반환 [ 생성된 엔티티의 pk값 반환 ]
        return entity.getMno();
    }
    // 2. 로그인
    public int getmember(MemberDto memberDto ){
        // 1. Dao 처리 [ select ]
            // 1. 모든 엔티티=레코드 호출 [ select * from member ]
        List<MemberEntity> entityList = memberRepository.findAll();
            // 2. 입력받은 데이터와 일치값 찾기
        for( MemberEntity entity : entityList ){ // 리스트 반복
            if( entity.getMemail().equals(memberDto.getMemail())){ // 엔티티 = 레코드 의 이메일 과 입력받은 이메일
                if( entity.getMpassword().equals(memberDto.getMpassword())){ // 엔티티 = 레코드 의 비밀번호 와 입력받은 비밀번호
                    // 세션 부여[ 로그인 성공시 'loginMno' 라는 이름으로 회원번호 세션 저장 ]
                    request.getSession().setAttribute( "loginMno", entity.getMno() );
                    return 1;// 로그인 성공했다.
                }else{
                    return 2; // 비밀번호 틀림
                }
            }
        }
        return 0; // 아이디가 틀림
    }
    // 3. 비밀번호찾기
    public String getpassword( String memail ){
        // 1. 모든 레코드/엔티티 꺼내온다.
        List<MemberEntity> entityList = memberRepository.findAll();

        // 2. 리스트에 찾기
        for( MemberEntity entity : entityList ){ // 리스트 반복
            if( entity.getMemail().equals( memail) ){
                return entity.getMpassword();
            }
        }
        return null;    // 존재하지 않는 이메일 입력시 null 값 출력
    }
    // 4. 회원탈퇴
    public int setdelete( String mpassword ){
        // 1. 로그인된 회원의 엔티티 필요!!
            // 1. 세션 호출
            Object object =  request.getSession().getAttribute("loginMno");
            // 2. 세션 확인
            if( object != null ){ // 만약에 세션이 null 이 아니면 로그인 됨
                int mno = (Integer) object; // 형변환 [ object --> int ]
                // 3. 세션에 있는 회원번호[PK] 로 리포지토리 찾기 [ findById : select * from member where mno = ? ]
                Optional< MemberEntity > optional =  memberRepository.findById(mno);
                if( optional.isPresent() ){ // optional객체내 엔티티 존재 여부 판단
                    // Optional 클래스 : null 관련 메소드 제공
                    // 4.Optional객체에서 데이터[엔티티] 빼오기
                    MemberEntity entity = optional.get();
                    // 5. 탈퇴 [ delete : delete from member where mno = ? ]
                    memberRepository.delete( entity );
                    // 6. 세션 [ 세션삭제 = 로그아웃 ]
                    request.getSession().setAttribute("loginMno" , null);
                    return 1;
                }
            }
            return 0; // [ 만약에 세션이 null 이면 반환 o 혹은 select 실패시   ]
    }
    // 5. 회원 수정
    @Transactional // 데이터 수정[update]시 필수!!
    public int setupdate( String mpassword ){
        // 1. 세션 호출
        Object object = request.getSession().getAttribute("loginMno");
        // 2. 세션 존재여부 판단
        if( object != null ){
            int mno = (Integer)object;
            // 3. pk값을 가지고 엔티티[레코드] 검색
            Optional<MemberEntity> optional
                    =  memberRepository.findById( mno );
            // 4. 검색된 결과 여부 판단
            if( optional.isPresent() ){ // 엔티티가 존재하면
                MemberEntity entity = optional.get();
                // 5. 찾은 엔티티[레코드]의 필드값 변경 [ update member set 필드명 = 값  where 필드명 = 값 ]
                entity.setMpassword( mpassword );
                return  1 ;
            }
        }
        return 0;
    }
    // 6. 로그인 여부 판단
    public int getloginMno(){
        // 1. 세션 호출
        Object object = request.getSession().getAttribute( "loginMno" );
        System.out.println( object );
        System.out.println( (Integer) object );

        // 2. 세션 여부 판단
        if( object != null ){ return (Integer) object; }
        else { return 0; }  // 로그인 안했을 경우
    }
    // 7. 로그아웃
    public boolean logout(){
        request.getSession().setAttribute("loginMno", null);    // get : 가져오기 , set : 등록하기
        return true;
    }
    // 8. 회원목록
    public List<MemberDto> list(){
        // 1. JPA를 이용한 모든 엔티티 호출
        List<MemberEntity> list = memberRepository.findAll();
        // 2. 엔티티 --> DTO 변경
            // DTO list 선언
        List<MemberDto> dtoList = new ArrayList<>();
        for( MemberEntity entity : list ){
            dtoList.add( entity.toDto() );  // 엔티티 --> DTO 형변환
        }
        return dtoList;
    }

    // 9. 인증코드 발송
    public String getauth( String toemail ){
        String auth = "";
        String html = "<html><body><h1> EZENWEB 회원 가입 이메일 인증코드입니다. </h1>";

        Random random = new Random();   // 1. 난수 객체 생성
        for( int i=0; i<6; i++ ){       // 6번 실행
            char randchar = (char)(random.nextInt(26)+97);  // 아스키코드 : 97~122번까지 : 알파벳 소문자
                // char randchar = (char)(random.nextInt(10)+48)   // 아스키코드 : 48~57번까지 : 숫자 0~9
            auth += randchar;
        }
        html +="<div>인증코드 : "+auth+"</div>";
        html += "</body></html>";
        meailsend( toemail, "EzenWeb 인증코드", html );
        return auth;    // 인증코드 반환
    }
    // *. 메일 전송 서비스
    public void meailsend( String toemail , String title , String content ){
        try {
            // 1. Mime 프로토콜 객체 생성
            MimeMessage message = javaMailSender.createMimeMessage();
            // 2. MimeHelper 설정 객체 생성  new MimeMessageHelper( mime객체명 , 첨부파일여부 , 인코딩타입 )
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper( message, true, "utf-8");
            // 3. 보내는사람 정보
            mimeMessageHelper.setFrom("wjlqlrll@naver.com", "Ezenweb");
            // 4. 받는 사람
            mimeMessageHelper.setTo(toemail);
            // 5. 메일 제목
            mimeMessageHelper.setSubject(title);
            // 6. 메일 내용
            mimeMessageHelper.setText(content.toString(), true); // HTML 형식
            // 7. 메일 전송
            javaMailSender.send( message );
        }catch (Exception e){ System.out.println("메일전송 실패 : "+e); }

    }


} // clas end

/*
    메일 전송
        1. 라이브러리 : testImplementation 'org.springframework.boot:spring-boot-starter-test'
        2. 보내는사람 정보 이메일 정보[ application.properties ]
            네이버기준
                1. 네이버로그인 -> 메일 -> 환경설정
                2. POP3/SMTP 설정 -> 사용함
                3. host. port 등 정보작성
        3.

 */
