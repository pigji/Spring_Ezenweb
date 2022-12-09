import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Index from './component/Index' // ** 프로젝트

// 1. 사용할 컴포넌트 호출   // [ import 컴포넌트명 from 파일명 ]
import Library from './Book/chapter3/Library'   // 3장
import Clock from './Book/chapter4/Clock'       // 4장
import CommentList from './Book/chapter5/CommentList'   // 5장
import NotificationList from './Book/chapter6/NotificationList' // 6장
import Counter from './Book/chapter7/Ex1_Hook' // 7장
import Accommodate from './Book/chapter7/Accommodate' // 7장
import ConfirmButton from './Book/chapter8/ConfirmButton' // 8장 [ 클래스형 ]
import ConfirmButton2 from './Book/chapter8/ConfirmButton2' // 8장 [ 함수형 ]
import TestState from './Book/chapter8/TestState' // 8장 [ setState vs prevState 비교 ]
import LandingPage from './Book/chapter9/LandingPage' // 9장
import AttendanceBook from './Book/chapter10/AttendanceBook' // 10장 [ 실습 ]
import Signup from './Book/chapter11/SignUp' // 11장 [ 실습 ]



// 2. DOM 컨테이너 [ 'root' 는 public --> index.html 안에 있는 태그 ]
const root = ReactDOM.createRoot(document.getElementById('root'));
// ** 프로젝트
      root.render(
           <React.StrictMode>
           <Index />
           </React.StrictMode>
      );

// 3. DOM 컨테이너 렌더링
    // 1. 기본값 [ app.js 컴포넌트를 root 에 렌더링 ]
        //root.render(
        //  <React.StrictMode>
        //    <App />
        //  </React.StrictMode>
        //);

    // 2. 기본값 [ Library 컴포넌트를 root 에 렌더링 ]
    //    root.render(
    //      <React.StrictMode>
    //        <Library />
    //      </React.StrictMode>
    //    );

    // 3. [ Clock 컴포넌트를 root 에 렌더링 ]
        // 1. setInterval 1초마다 렌더링
            // setInterval( (인수) => { 실행문 } , 밀리초 )
//            setInterval( () => {
//                root.render(
//                          <React.StrictMode>
//                            <Clock />
//                          </React.StrictMode>
//                        );
//            } , 1000 );

    // 4. [ CommentList 컴포넌트를 root 에 렌더링 ]
//    root.render(
//          <React.StrictMode>
//          <CommentList />
//          </React.StrictMode>
//    );

    // 5. [ Signup 컴포넌트를 root 에 렌더링 ]
//    root.render(
//           <React.StrictMode>
//           <Signup />
//           </React.StrictMode>
//    );

    // 6. [ NotificationList 컴포넌트를 root 에 렌더링 ]
//        root.render(
//               <React.StrictMode>
//               <NotificationList />
//               </React.StrictMode>
//        );

      // 7. ex1
//       root.render(
//         <React.StrictMode>
//           <Counter />
//         </React.StrictMode>
//       );

        // 7. 실습
//       root.render(
//         <React.StrictMode>
//           <Accommodate />
//         </React.StrictMode>
//       );

        // 8. 실습
//       root.render(
//         <React.StrictMode>
//           <ConfirmButton />
//         </React.StrictMode>
//       );
        // 8. 실습 [ 함수형 코드 작성 ]
//       root.render(
//         <React.StrictMode>
//           <ConfirmButton2 />
//         </React.StrictMode>
//       );
        // 8. 테스트 [ setState vs prevState 비교 ]
//       root.render(
//         <React.StrictMode>
//           <TestState />
//         </React.StrictMode>
//       );

        // 9. 실습 [ p.279 ]
//       root.render(
//         <React.StrictMode>
//           <LandingPage />
//         </React.StrictMode>
//       );





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
