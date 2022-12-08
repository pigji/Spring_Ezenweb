// p. 249
// 1. 컴포넌트 첫글자는 무조건 대문자!!
// 2. 클래스컴포넌트 / 함수컴포넌트
// 3. this.필드명 : 현재 클래스의 멤버[ 필드, 함수, 생성자 ]

import React from 'react'

// 클래스형 컴포넌트
class Ex1_Event extends React.Component {

    // ------------------------------- 1.  ---------------------- //
    // 1. 생성자
    constructor( props ) {
        super( props )
        this.state = { isToggleOn : true }; // state 생명주기   // 메모리 관리
        this.handleClick = this.handleClick.bind( this );   // 생성자에 Bound
    }
    // 2. 이벤트 함수
    handleClick(){  // prevState : state 값
        this.setState( prevState => ({
            isToggleOn : !prevState.isToggleOn
        } ));
    }

    // -------------------------------- 2.  ---------------------- //
    handleClick = () => {
            this.setState( prevState => ({
                isToggleOn : !prevState.isToggleOn
            } ));
    }

    // ------------------------------- 3. 바로 함수 사용 ---------------------- //
    // 2. 렌더링 함수
    render() {
        return(
            <button onClick={ this.handleClick }>
                { this.state.isToggleOn ? '켜짐' : '꺼짐' }
            </button>
        );
    }
}
// 함수형 컴포넌트
export default Ex1_Event

function default Ex1_Event

function Ex1_Event( props ) {
    return();
}