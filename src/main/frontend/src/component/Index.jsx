// jsx : 리액트 확장 표현식 파일
// 컴포넌트 단위 애플리케이션 제작
// SPA : 싱글 페이지 애플리케이션 [ 페이지는 하나다. ]
    // 라우터 라이브러리 : 가상 URL :
// 1. 컴포넌트 만들기 준비물
    // 1. 첫글자는 무조건 대문자로 한다!!! [ 컴포넌트명 = 파일명 ]
    // 2. 리액트[ 프레임워크가 아니다. ] 라이브러리 집합소 [ import 많다. ]
        // 1. import React from 'react';
        // 2. 컴포넌트 정의 --> function 컴포넌트명(){ return( 렌더링할 코드 ); }
        // 3. export default 컴포넌트명
            // 2+3. export default function 컴포넌트명(){ return( 렌더링할 코드 ); }

// 1. jsx 파일 불러오기 [ /해당 컴포넌트 선언 ]
import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Signup from './member/Signup';
import Login from './member/Login';
import BoardList from './board/BoardList';
import BoardWrite from './board/BoardWrite';
import BookList from '../Book/BookList';

import Library from '../Book/chapter3/Library'   // 3장
import Clock from '../Book/chapter4/Clock'       // 4장
import CommentList from '../Book/chapter5/CommentList'   // 5장
import NotificationList from '../Book/chapter6/NotificationList' // 6장
import Counter from '../Book/chapter7/Ex1_Hook' // 7장
import Accommodate from '../Book/chapter7/Accommodate' // 7장
import ConfirmButton from '../Book/chapter8/ConfirmButton' // 8장 [ 클래스형 ]
import ConfirmButton2 from '../Book/chapter8/ConfirmButton2' // 8장 [ 함수형 ]
import TestState from '../Book/chapter8/TestState' // 8장 [ setState vs prevState 비교 ]
import LandingPage from '../Book/chapter9/LandingPage' // 9장
import AttendanceBook from '../Book/chapter10/AttendanceBook' // 10장
import SignUp from '../Book/chapter11/SignUp' // 11장


// 라우터 설치[ 터미널 ] : npm i react-router-dom   ==  npm install react-router-dom    // i는 install 약자
// import { 컴포넌트명 } from 'react-router-dom';    // 6버전
import { HashRouter, BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
    // BrowserRouter : 가상 URL
    // vs HashRouter :
    // Routes : Route 목록/리스트
    // Route : 가상 URL 생성 --> 해당 URL 에 따른 컴포넌트 렌더링 [ SPA ]
    // Link : <---> <a>태그와 같다. : 하이퍼링크
        // Link to = "Route URL"
    // Router :

// 2.
export default function Index( props ){
    return(
        <div className="webbox">
            <BrowserRouter>
                <Header/>
                        <Routes>    {/* 해당 경로 지정 ( 경로명은 아무거나 ) */}
                            {/* <Route path="경로지정" , element = { 컴포넌트명 /> } />  */}
                            <Route path="/" element = { <Home />} />
                            <Route path="/member/signup" element={ <Signup/> } />
                            <Route path="/member/login" element={ <Login/> } />
                            <Route path="/board/list" element={ <BoardList/> } />
                            <Route path="/board/write" element={ <BoardWrite/> } />
                            <Route path="/book/list" element={ <BookList/> } />

                            <Route path="/chapter3/Library" element={ <Library/> } />
                            <Route path="/chapter4/Clock" element={ <Clock/> } />
                            <Route path="/chapter5/CommentList" element={ <CommentList/> } />
                            <Route path="/chapter6/NotificationList" element={ <NotificationList/> } />
                            <Route path="/chapter7/Accommodate" element={ <Accommodate/> } />
                            <Route path="/chapter8/ConfirmButton2" element={ <ConfirmButton/> } />
                            <Route path="/chapter9/LandingPage" element={ <LandingPage/> } />
                            <Route path="/chapter10/AttendanceBook" element={ <AttendanceBook/> } />
                            <Route path="/chapter11/SignUp" element={ <SignUp/> } />
                        </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}


