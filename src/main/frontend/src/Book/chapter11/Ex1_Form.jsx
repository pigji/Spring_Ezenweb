// p. 313
import React from 'react';

export default function NameForm( props ) {

    const [ value, setValue ] = useState('');   // input value
    const handleChange = ( e ) => { setValue( e.target, value ); }; // 컴포넌트에서 사용되는 메모리

    const [ value2, setValue2 ] = useState(''); // textarea value
    const handleChange2 = ( e ) => { setValue( e.target, value ); }; // 컴포넌트에서 사용되는 메모리

    const [ value3, setValue3 ] = useState('grape'); // select value
    const handleChange3 = ( e ) => { setValue( e.target, value ); }; // 컴포넌트에서 사용되는 메모리

    return{
        <form>
            <lable>
                이름 : <input type="text" value={value} onChange={ handleChange }/>
            </label>
            <lable>
                요청사항 : <textarea value={value2} onChange={ handleChange2 } /}
            </lable>
            <lable>
                과일을 선택하세요 :
                <select value3={value3} onChange={ handleChange3 } />
                    <option value="apple"> 사과 </option>
                    <option value="banana"> 바나나 </option>
                    <option value="grape"> 포도 </option>
                    <option value="watermelon"> 수박 </option>
                </select>
            </lable>
            <button type="submit"> 제출 </button>
        </from>
    }
}