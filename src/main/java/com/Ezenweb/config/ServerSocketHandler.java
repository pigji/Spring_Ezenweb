package com.Ezenweb.config;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;
import java.util.Vector;

@Component  // 해당 클래스를 스프링 빈[ 스프링메모리 ]에 해당 클래스를 등록
public class ServerSocketHandler extends TextWebSocketHandler {

    // 0. 접속자 명단 리스트
    private static List<WebSocketSession> list = new Vector<>();    // Vector : 동기화


    // 1. 접속했을 때
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("접속 : " + session );
        list.add( session );
    }

    // 2. 연결이 끊겼을 때 [ 종료 ]
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("퇴장 : " + session );
        list.remove( session ); // 리시트명단엥서 퇴장한 세션 제거
    }

    // 3. 메시지를 받았을 때
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("메시지 : " + session );
        for( WebSocketSession s : list ) {   // 반복문을 이용한 접속자명단 출력
            s.sendMessage( message );   // 서버가 받은 메시지를 모든 접속자에게 전달
        }
    }


} // end
