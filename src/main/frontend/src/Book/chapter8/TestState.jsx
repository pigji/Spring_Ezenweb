
// setState vs prevState
import React, { useState } from 'react';    // Hook 사용

export default function TestState( props ){
    const [ state, setState ] = useState( 0 );

    // 버튼을 누르면 마지막에 들어간 setState( state+5 ) 만 실행되어 5씩 증가한다. [ 초기값 5부터 시작 ]
        // 비동기
        // 원본 값 +1
    const stateadd = () => {
        setState( state+1 );
        setState( state+2 );
        setState( state+3 );
        setState( state+4 );
        setState( state+5 );    // 원본 값 +1
    }

    // 버튼을 누르면 1 ~ 5까지 더한 값 15씩 증가한다. [ 초기값 15부터 시작 ]
        // 렌더링[ 업데이트 ]이 바로 되지 않는다.
        // 이전 state 값[ 원본 값 ]을 구할 수 있다.
        // 이전 값 +1
    const stateadd2 = () => {
            setState( ( prevState ) => prevState+1 );
            setState( ( prevState ) => prevState+2 );
            setState( ( prevState ) => prevState+3 );
            setState( ( prevState ) => prevState+4 );
            setState( ( prevState ) => prevState+5 );   // 최종 렌더링
    }

    return(
      <div>
        <div> state에 저정된 값 : { state } </div>
        <button onClick={ stateadd }> 클릭이벤트 </button>
        <button onClick={ stateadd2 }> 클릭이벤트2 </button>
      </div>
    );
}