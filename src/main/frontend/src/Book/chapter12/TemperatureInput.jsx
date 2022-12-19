// 교재 12장
/* 임포트 */
import React from 'react';
/*-------*/
/* 전역변수 */
const scaleNames = { c:"섭씨", f :"화씨" } // 객체 : c 이면 섭씨 , f 이면 화씨
/*--------- */
// p.340 컴포넌트[함수] 만들기
export default function TemperatureInput( props ){
    // export default : 내보내기 컴포넌트[함수]
        // 컴포넌트 첫글자는 무조건 대문자 : TemperatureInput
            // ( props ) : 컴포넌트 매개변수 : 컴포넌트 속성들[ js 객체형식 ]
            // 예 ) props : { scale:"c" , temperature= 함수 ,  onTemperatureChange = 함수   }
            // 예 ) props : { scale:"f" , temperature= 함수 ,  onTemperatureChange = 함수   }
    /* ------------ js , react  -------------------*/
    const handleChange = ( e ) => {   props.onTemperatureChange( e.target.value); }
    /* ------------------------------------------ */

    /* ------------ html or jsx표현식 { }------------------*/
    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );
    /* -------------------------------------------*/
}