// 컴포넌트 만들기[ 생성 ]
    // 1. 컴포넌트 이름 첫글자는 대문자로 시작
        // 1. 파일명과 컴포넌트명을 동일하게 한다.
        // Comment.jsx == function Comment(){}
    // 2. 준비물
        // 1. 상단 import React from 'react' 필수!!
        // 2. 하단 export default Comment 필수!!
    // 3. 컴포넌트 = 함수
        // 1. 입력 : props [ 매개변수 = 속성객체 ]
        // 2. 출력 : return [ 엘리먼트 = 가상 DOM ]

// 1.
import React from 'react';  // 필수
// ** CSS 파일 가져오기
import styles from './Comment.css';

// 2.
function Comment( props ) {
    return(
        <div className="wrapper">
            <div className="imgContainer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    className="image"
                />
            </div>

            <div className="contentContainer">
                <span className="nameText">{props.name}</span>
                <span className="commentText">{props.comment}</span>
            </div>
        </div>
    );
}
// 3. 컴포넌트 내보내기
export default Comment