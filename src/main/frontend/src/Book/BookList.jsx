import React from 'react';
import StyleSheet from '../css/booklist.css';

export default function BookList( props ) {
    return(
        <div>
            <ul className="list">
                <li><a href="/book/chapter3"> chapter3 </a></li>
                <li><a href="/book/chapter4"> chapter4 </a></li>
                <li><a href="/book/chapter5"> chapter5 </a></li>
                <li><a href="/book/chapter6"> chapter6 </a></li>
                <li><a href="/book/chapter7"> chapter7 </a></li>
                <li><a href="/book/chapter8"> chapter8 </a></li>
                <li><a href="/book/chapter9"> chapter9 </a></li>
            </ul>
        </div>
    )
}

