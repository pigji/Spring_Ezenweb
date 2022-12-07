// p.234
// 1. 리액트 커스텀 훅 만들기
import React , { useState } from 'react';

// 2. 커스텀 훅 [ use 훅 이름정의 ]
export default function useCounter( value ){
    // 3. useState 훅
        // 'count' 라는 이름으로 변수 선언 , setCount 해당 변수 변경
        // count 변수 값 변경시 setCount 함수 이용
    const [ count , setCount ] = useState( value );

    // 이벤트 함수 [ 1. count 변수 증가 이벤트   2. count 변수 감소 이벤트 ]
        // Math.max( 값1, 값2 ) : 둘 중에 큰 값 호출
    // 변수 = 익명 화살표함수
    const increaseCount = ()=> setCount( (count) => count+1 );    // 기존값 +1
    const decreaseCount = ()=> setCount( (count) => Math.max( count-1, 0  ))  // 기존값 -1 혹은 0 중 더 큰 값

    return [ count , increaseCount, decreaseCount ];    // 배열반환

} // end
