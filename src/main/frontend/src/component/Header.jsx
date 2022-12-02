// 1. 컴포넌트 호출
import React from 'react';
import StyleSheet from '../css/header.css'; // src --> css --> header.css 호출    //상대경로
import logo from '../img/logo.webp'; // 이미지 적용
import { HashRouter, BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";


// 2.
export default function Header( props ) {
    return(
        <div>
            <img className="logo" src={logo}  />
            <h3 className="header_name"> 헤더 </h3>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/member/signup"> 회원가입 </Link></li>
                <li><a href="/member/logout"> 로그아웃 </a></li>
            </ul>
        </div>
    );
}

