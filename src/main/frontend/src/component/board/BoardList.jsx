import React from 'react';

export default function BoardList( props ){
    return(
        <div>
            <a href="/board/write"> 글쓰기[ 로그인 했을때만 표시 ] </a>
            <h3> 글목록 페이지 </h3>
                <div className="bcategorybox"> </div>

                <table className="btable">

                </table>
        </div>
    );
}