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





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
