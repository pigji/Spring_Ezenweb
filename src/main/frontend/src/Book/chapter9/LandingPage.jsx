// p. 281 : 컴포넌트
import React, { useState } from 'react';
import Toolbar from './Toolbar';  // Toolbar.jsx 불러오기


export default function LandingPage( props ) {
    // 1. state 선언 : const [ 변수명, set 함수명 ] = useState( 초기 값 )
    const [ isLoggedIn , setIsLoggedIn ] = useState( true );   // 초기 값 false : 로그인 안했다. [ true 로 변경하면 값 나옴. ]
    // 2. 함수
    const onClickLogin = () => { setIsLoggedIn( true ); };  // 로그인 실행 함수
    // 3. 함수
    const onClickLogout = () => { setIsLoggedIn( false ); }; // 로그아웃 실행 함수
    // 4. 렌더링
    return(
        <div>
            <Toolbar
                isLoggedIn = { isLoggedIn }
                onClickLogin = { onClickLogin }
                onClickLogout = { onClickLogout }
            />
            <div style={{ padding:16 }}> 소플과 함께하는 리액트 공부! </div>
        </div>
    );

} // end