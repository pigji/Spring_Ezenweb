import React , { useState , useEffect } from 'react';
import axios from 'axios';
import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route,
    Link,
    Router,
    useParams   // 라우터 경로상의 매개변수 호출 Hook [ 쿼리스트링 형식 --> 키:값, 키:값 ]
} from "react-router-dom"; // 라우터 DOM


export default function BoardView( props ) {
    const params = useParams(); // use params 훅 : 경로[URL]상의 매개변수 가져올 때
    console.log( params.bno ); // 확인

    const [ board, setBoard ] = useState( { } ); // 게시물 정보 가져오기
    useEffect(  // 1. 서버로부터 해당 게시물번호의 게시물정보 --> useState[board] 요청  //무한루프 돌지않게 막기 [] --> 1번만 실행할 때
            () => axios.get( "/board/getboard" , { params : { bno: params.bno } } )
            .then( res => { setBoard( res.data )} )
    , [] )

    const [ login, setLogin ] = useState( { } ); // 로그인 정보 메모리
    useEffect(  // 2. 서버로부터 해당 로그인된 회원의 아이디 [ MemberService : 6번 메소드 getloginMno() return 반환 ]
            () => axios.get("/member/getloginMno").then( res => { setLogin( res.data ); } )
    , [] )

    const onDelete = () => {    // 3. 서버로부터 해당 게시물번호를 이용한 삭제 요청
        axios.delete("/board/delboard", { params : { bno: params.bno } } )
        .then( res => { alert('게시물 삭제 성공!!'); window.location.href='/board/list'; } )
    }

    // 5. 해당 게시물번호의 해당하는 업데이트 페이지로 이동
    const getUpdate = () => { window.location.href='/board/update/'+params.bno;  }

    return(
           <div>
               <div>{ board.btitle }</div>
               <div dangerouslySetInnerHTML={{__html:board.bcontent }} ></div>
               { board.bfilename != '' && <a href={"/board/filedownload?filename="+board.bfilename}>{ board.bfilename }</a>  }
               <div>
                   { login == board.memail && <button type="button" onClick={ onDelete }> 삭제 </button>  }
                   { login == board.memail && <button type="button" onClick={ getUpdate }> 수정 </button>  }
               </div>
           </div>
    )
} // end
/*
    [ JS ] innerHTML 사용방법
        0. <태그명 class="클래스명"> </태그명>
        1. document.querySelector('.클래스명').innerHTML
    [ JSX ] innerHTML 사용방법
        1.  <태그명 dangerouslySetInnerHTML = {{ __html : 데이터 }} > </태그명>

    조건부 렌더링
        1. 조건 && HTML
        2.  조건 ? 참HTML : 거짓HTML
            [ 중첩 ]3. 조건1 ? 참1HTML : 조건2 : 참2HTML : 조건3 ? 참3HTML : 거짓HTML
*/