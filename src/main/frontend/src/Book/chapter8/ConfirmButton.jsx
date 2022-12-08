// p. 255
import React from 'react';

class ConfirmButton extends React.Component {
    // 1. 생성자
    constructor(props) {
        super(props);
        this.state = { isConfirmed : false } // false : 초기값     //리액트 컴포넌트의 데이터를 담는 변수 [ 재 랜더링 - 업데이트 ]
        this.handleConfirm = this.handleConfirm.bind(this); // 바인딩하기
    }

    // 3. 이벤트함수 정의
    handleConfirm(){
        // this.setState( () => ( {  } ) );
        this.setState( ( prevState ) => ( { isConfirmed : !prevState.isConfirmed } ) );
    }

    // 2. 렌더링 함수
    render(){
        return(
            <button onClick={ this.handleConfirm } disabled = { this.state.isConfirmed }>
                { this.state.isConfirmed ? "확인됨" : "확인하기" }
            </button>
        );
    }
}
export default ConfirmButton;