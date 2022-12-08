// p. 261
import React, { useState } from 'react';    // Hook 사용

function ConfirmButton2( props ) {
    // 1. useState 훅을 이용한 state 사용
    const [ isConfirmed, setIsConfirmed ] = useState( false );
    // 2. 함수형 변수
    const handleConfirm = () => {
        setIsConfirmed( ( preIsConfirmed ) => !preIsConfirmed );
    }

    // 테스트 [ 버튼 스위치 역할 렌더링 ]
     const handleConfirm2 = () => {
    // 1.
//        if( isConfirmed ){ setIsConfirmed( false ) }
//        else{ setIsConfirmed( true ) }
    // 2.
          setIsConfirmed( ( preIsConfirmed ) => !preIsConfirmed )
    }

    return (
        <div>
           <button onClick={ handleConfirm } disabled = { isConfirmed }>
               { isConfirmed ? "확인됨" : "확인하기" }
           </button>

           {/* 조건문 렌더링 */}
           <button onClick={ handleConfirm2 } >
                버튼
           </button>
           { isConfirmed && <input type="text" /> }
        </div>
    );
}
// 컴포넌트 내보내기 [ index.js ]
export default ConfirmButton2;
