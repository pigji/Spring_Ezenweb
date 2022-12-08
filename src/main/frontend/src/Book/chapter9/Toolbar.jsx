// p. 279 : 컴포넌트
import React from 'react';
import StyleSheet from './Toolbar.css'; // css

export default function Toolbar( props ) {
    const { isLoggedIn , onClickLogin, onClickLogout } = props;
    return(
        <div className="wrapper">
            { isLoggedIn && <span className="greeting"> 환영합니다. </span> }   { /* 조건문 렌더링 : true 일 경우 실행 */ }
            { /* isLoggedIn ? (참 DOM) : (거짓 DOM) */ }

            { isLoggedIn ? (
                <button onClick={ onClickLogout }> 로그아웃 </button>
            ) : (
                <button onClick={ onClickLogin }> 로그인 </button>
            ) }
        </div>
    )
}