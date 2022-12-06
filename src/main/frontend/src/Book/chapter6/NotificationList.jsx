// 1. import : 상대경로 [ 현재파일 기준./ : 현재폴더,     ../ : 상위폴더 ]
import React from 'react';
import Notification from './Notification'    // 파일 가져오기

// 2. 데이터 가져오기
const reservedNotifications = [
    { id : 1 , message : '안녕하세요, 오늘 일정 알려드립니다.' },
    { id : 2 , message : '점심 식사 시간입니다.' },
    { id : 3 , message : '이제 곧 미팅이 시작됩니다.' },
];
// 3. 타이머 변수 [ Interval ]
var timer

// 4. 클래스를 이용한 컴포넌트 만들기
class NotificationList extends React.Component{
    // 1. 생성자
    constructor( props ){
        super(props);
        this.state = { notifications : [ ], }; // 비어있음.
    }
    // 2. 함수1 [ 컴포넌트 생성 ]
    componentDidMount(){
        const{ notifications } = this.state;    // 생명주기
        // timer = setInterval( () => {} , 밀리초 );
        timer = setInterval( () => {
            if( notifications.length < reservedNotifications.length ){  // 3회 반복
                const index = notifications.length; // 0번째 인덱스 먼저 대입 시작
                notifications.push( reservedNotifications[index] ); // 0번째 인덱스 message --> { message : '안녕하세요, 오늘 일정 알려드립니다.' }
                this.setState({ notifications : notifications });
            }else{
                this.setState({ notifications : [] })   // 상태 초기화
                clearInterval( timer ); // 타이머 초기화
            }
        } , 2000 ); // 2초마다 위 코드 실행
    }

    /* 추가코드 작성  NotificationList 컴포넌트 사망시[끝났을떼] timer 함수 종료 */
//    componentWillUnmount(){
//        if( timer ){    // timer 변수에 setInterval 함수가 있으면 true
//            clearInterval( timer ); // setInterval 종료
//        }
//    }

    // 3. 함수2
    render(){
        return(
            <div>
                { this.state.notifications.map( (n) => {
                    return <Notification id={ n.id } message={ n.message } />;
                } ) }
            </div>
        )
    }
}
// 3.
export default NotificationList;

/*
    리스트변수명.forEach( ( 반복변수명 ) => { 실행문 }; )
        ** break 문을 사용할 수 없다. [ 배열을 리턴시키지 않음. ]

    리스트변수명.mpa( ( 반복변수명 ) => { return 반환값 }; )
        ** [ 배열을 리턴시킴. ]
*/
