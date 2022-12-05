// 1. 컴포넌트 호출
import React from 'react';
import StyleSheet from '../css/header.css'; // src --> css --> header.css 호출    //상대경로
import logo from '../img/logo.png'; // 이미지 적용
import { HashRouter, BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import axios from 'axios';  // react 비동기 통신 라이브러리 [ npm install axios --> node 에서 다운로드 되었는지 확인 ]

// 2.
export default function Header() {

    // 1. 서버와 통신[ axios ]
    axios.get('http://localshot:8080/member/getloginMno').then( res => { alert("서버와 통신됨!") } )
    // axios.type( 'URL' ).then( res => { 응답 }
    /*
        $.ajax({
            url : "/member/getloginMno",
            type : "get",
            success : function(re) {}
        })
    */

    return(
        <div>
            <div className="header">
                <div className="header_logo">
                    <Link to="/"> <img className="logo" src={logo}  /></Link>
                </div>
                <ul className="top_menu">
                    <li><Link to="/member/signup"> 회원가입 </Link></li>
                    <li><Link to="/member/login"> 로그인 </Link></li>
                    <li><a href="/member/logout"> 로그아웃 </a></li>
                    <li><Link to="/board/list"> 자유게시판 </Link></li>
                </ul>
            </div>
        </div>
    );
}

