import React, { useState, useEffect, useRef } from 'react';

export default function Chatting( props ) {

    // 서버소켓과 연결 여부 저장하는 메모리
    const [ socketConn , setSockConn ] = useState( false );

    // 서버소켓으로부터 들어온 메시지를 저장하는 메모리
    const [ msgList , setMsgList ] = useState( [] );    // 깡통

    // 서버소켓 URL [ WebSocketConfiguration 에 작성한 url 과 경로가 같아야 한다!! ]
    const webSocketUrl = 'ws://localhost:8080/chat';

    // 클라이언트 소켓 [ 재렌더링 될 때마다 상태 유지 --> useRef 사용 ]
    let ws = useRef( null );    // useState 수정될 때마다 해당 컴포넌트 재렌더링    // useRef : 재렌더링될 때 적용되지 않음.

    // 컴포넌트가 생성[ mount ] 될 때 서버소켓 연결 , 사망[ unmount ] 될 때 서버소켓 닫기
    //useEffect( () => {} , [] );   useEffect( 함수명 , [] );
    useEffect( () => {
        if( !ws.current ){  // 클라이언트 소켓이 없으면
            // 클라이언트 소켓 생성
            ws.current = new WebSocket( webSocketUrl ); // 클라이언트 소켓 생성[ 서버소켓 주소 ]   //webSocketUrl = 'ws://localhost:8080/chat'

            ws.current.onopen = () => {     // 1. 클라이언트 소켓이 open 될 때
                setSockConn( true );
            }
            ws.current.onclose = (e) => {   // 2. 클라이언트 소켓이 close 될 때
                console.log("닫기 : "+ e );
            }
            ws.current.onerror = (e) => {   // 3. 클라이언트 소켓이 error 될 때
                console.log("오류 : "+ e );
            }
            ws.current.onmessage = (e) => {  // 4. 서버소켓으로부터 message 를 받았을 때
                let data = JSON.parse( e.data );
                setMsgList(  ( prevMsgList) => [ ...prevMsgList , data ] );  // 기존 값 + 새로운 값 => 상태 업데이트
            }
        }
    } , [] );



    // 메시지 전송버튼 눌렀을 때 [ send 이벤트 ]
    const onMsg = () => {

        let msg = document.querySelector('.msgInput').value;        // 1. 입력받은 데이터 가져오기
        ws.current.send( JSON.stringify( { message : msg }) );      // 2. 웹소켓을 이용한 send 메소드 사용 [ JSON 형식으로 전송 ]
        document.querySelector('.msgInput').value = '';             // 3. 입력상자 초기화
    }

    return(
        <div>
            접속상태 : <span>{ socketConn }</span>
            <div>
                채팅입력 : <input type="text" className="msgInput" />
                <button type="button" onClick={ onMsg }> 전송 </button>
            </div>

            <div>
                 <h6> 채팅창 </h6>
                 {
                    msgList.map( (msg) => {
                        return <div>{ JSON.stringify(msg) }</div>
                    })
                 }
            </div>
        </div>
    )
} // end
/*
    useRef : 재렌더링 될 때 초기화 되지 않는 메모리
    useState
        1. setState() : 상태 업데이트         : 특정부분 업데이트/추가x ---> 덮어씌우기만 가능
        2. prevState() : 이전 상태 값 호출

        * 상태 리스트에 새로운 값 삽입
        setMsgList(  ( prevMsgList) => [ ...prevMsgList , data ] );
*/
/*
    리스트.forEach( () => { } )    : 반환[ return ] 없다.
    리스트.map( () => { } )        : 반환[ return ] 있다.
*/