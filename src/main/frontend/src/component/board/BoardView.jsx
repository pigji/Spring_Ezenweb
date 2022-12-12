import React from 'react';
import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route,
    Link,
    Router,
    useParams   // 라우터 경로상의 매개변수 호출 Hook [ 쿼리스트링 형식 --> 키:값, 키:값 ]
}
from "react-router-dom"; // 라우터 DOM

export default function BoardView( props ) {
    const params = useParams();
    return(
        <div>
            view 페이지로 들어왔다. 페이지번호 : { params.bno }
        </div>
    )
} // end