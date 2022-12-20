package com.Ezenweb.controller;

import com.Ezenweb.domain.dto.RoomDto;
import com.Ezenweb.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/room")    // 공통 URL
public class RoomController {

    // @Autowired : 스프링 빈[ 메모리 ]에 등록된 클래스만 가능
        // 5계층[ Controller, Service, Repository, Entity, Configuration 등 ]
    @Autowired
    private RoomService roomService;

    // 주의할 점 : 리액트 라우터에 있는 path 의 주소와 같으면 오류 발생
    @PostMapping("/setroom")
    public boolean write( RoomDto roomDto ){
        System.out.println("방등록 컨트롤러 들어왔다."+roomDto.toString()); return true;
    }

} // end
