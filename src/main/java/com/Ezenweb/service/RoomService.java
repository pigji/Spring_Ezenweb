package com.Ezenweb.service;

import com.Ezenweb.domain.dto.RoomDto;
import com.Ezenweb.domain.entity.member.MemberEntity;
import com.Ezenweb.domain.entity.member.MemberRepository;
import com.Ezenweb.domain.entity.room.RoomEntity;
import com.Ezenweb.domain.entity.room.RoomImgEntity;
import com.Ezenweb.domain.entity.room.RoomImgRepository;
import com.Ezenweb.domain.entity.room.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {

    @Autowired
    private MemberService memberService;
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private RoomImgRepository roomImgRepository;

    // 현재 스프링에 배포된 내장서버 폴더 -
    // // String path ="C:\\프로젝트경로\\build\\resources\\main\\static\\bupload\\";
    //String path = "C:\\Users\\504\\OneDrive\\바탕 화면\\SpringWeb\\Spring_Ezenweb\\build\\resources\\main\\static\\bupload\\";
    // 현재 스프링에 배포된 내장 서버내 리액트 리소스[ view ] 폴더 - React 폴더
        // 서버[ 내장서버 ]가 재 시작되면 ㅣㄹ드폴더에 업로드된 파일이 사라짐.
    String path = "C:\\Users\\504\\OneDrive\\바탕 화면\\SpringWeb\\Spring_Ezenweb\\build\\resources\\main\\static\\static\\media\\";


    @Transactional
    public boolean write(RoomDto roomDto){

        // 1. 등록한 유저[ 로그인한 유저 ]
        String loginMemail = memberService.getloginMno();
        if( loginMemail == null ){ return false; }
        MemberEntity memberEntity = memberRepository.findByMemail( loginMemail ).get();

        // 2. 방, 사진 등록[ pk ]
            // 1. 룸 저장[ save( 엔티티 ) 반환타입[ 저장된 매핑 레코드  ]
        RoomEntity roomEntity = roomRepository.save( roomDto.toEntity() );
        if( roomEntity.getRno() < 1 ){ return false; }
            // 2. 룸에 회원엔티티 대입   // 3. 회원엔티티에 룸 대입[ 양방향 관계 ]
        roomEntity.setMemberEntity( memberEntity );
        memberEntity.getRoomEntityList().add( roomEntity );
            // 3. 사진 등록 저장[ fk ]
        roomDto.getRimg().forEach( (img) -> {   // 첨부파일이 여러개일 경우 혹은 존재할 경우

            if( !img.getOriginalFilename().equals("") ){ // 실제 첨부파일의 파일명이 존재할 경우
                RoomImgEntity roomImgEntity = roomImgRepository.save( RoomImgEntity.builder().build() ); // 필드가 적을때는 굳이 DTO 필요 없음.
                // 4. 룸에 사진엔티티 대입   // 5. 사진엔티티에 룸 대입[ 양방향 관계 ]
                roomEntity.getRoomImgEntityList().add( roomImgEntity );
                roomImgEntity.setRoomEntity( roomEntity );

                // 첨부파일 사진 업로드
                try {
                    // 첨부파일에 식별자 추가[ 동일한 파일명이면 겹쳐서 문제가 생김 ] // [ pk값(Rimgno) + 파일명 ]
                    String filename = roomImgEntity.getRimgno()+img.getOriginalFilename();  // 첨부파일된 실제 파일명
                    roomImgEntity.setRimg( filename );  // DB에 식별자가 추가된 파일명으로 변경
                    File file = new File(path + filename);  // 경로 + 첨부파일명 => file 클래스 객체화[ transferTo 함수의 인수 file ]
                    img.transferTo( file );
                }catch ( Exception e ){
                    System.out.println("[업로드 실패] : "+ e ); }
                        // MultipartFile 인터페이스
                        // transferTo : 업로드[ 파일 이동 ] 함수  // 기존파일.transferTo( 이동할 경로 )
            }
        });
        return true;
    }

    // 2. 룸 출력
    public List<RoomDto> getroomlist(){
        // 1. 모든 룸 엔티티 꺼내기
        List<RoomEntity> roomEntities = roomRepository.findAll();   // 매핑된 엔티티들
        List<RoomDto> roomDtoList = new ArrayList<>();  // 출력용 DTO [ 엔티티는 출력 목적x ]

        // 2. 형변환
        roomEntities.forEach( (e) -> {  roomDtoList.add( e.toDto() );  });
        return roomDtoList;
    }

} // end
