import React from 'react';
import StyleSheet from '../css/booklist.css';
import { HashRouter, BrowserRouter, Routes, Route, Link,  Router } from "react-router-dom";

export default function BookList( props ) {
    return(
        <>
            <ul className="list">
                <li><Link to="/chapter3/Library"> chapter3 </Link></li>
                <li><Link to="/chapter4/Clock"> chapter4 </Link></li>
                <li><Link to="/chapter5/CommentList"> chapter5 </Link></li>
                <li><Link to="/chapter6/NotificationList"> chapter6 </Link></li>
                <li><Link to="/chapter7/Accommodate"> chapter7 </Link></li>
                <li><Link to="/chapter8/ConfirmButton2"> chapter8 </Link></li>
                <li><Link to="/chapter9/LandingPage"> chapter9 </Link></li>
                <li><Link to="/chapter10/AttendanceBook"> chapter10 </Link></li>
                <li><Link to="/chapter11/SignUp"> chapter11 </Link></li>
                <li><Link to="/chapter12/Calculator"> chapter12 </Link></li>
            </ul>
        </>
    );
}

