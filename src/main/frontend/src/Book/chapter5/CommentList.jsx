import React from 'react';  // 필수
import Comment from './Comment' // 컴포넌트 가져오기


// 1. 데이트 리스트 [ 서버통신과 통신된 결과물 ]
const comments = [  // 댓글 3개 객체를 저장하는 리스트 객체
    {   // 댓글1
        name : "이인제" ,
        comment : "안녕하세요. 소플입니다. "
    },
    {   // 댓글2
        name : "유재석" ,
        comment : "리액트 재미있어요. "
    },
    {   // 댓글3
         name : "강호동" ,
         comment : "저도 리액트 배워보고 싶습니다. "
    }
];


function CommentList( props ){
    // map vs forEach
        // 리스트명.map( ( 반복명수명 ) => { 실행문 } ) --> return 값 반환.
        // 리스트명.forEach( ( 반복명수명 ) => { 실행문 } ) --> return 값을 받지 못함.

        // 1. 리스트 객체 없이 반복문 사용했을때
//         return(
//             <div>
//                 <Comment name={ "이인제" } comment={ "안녕하세요. 소플입니다. " } />
//                 <Comment name={ "유재석" } comment={ "리액트 재미있어요. " } />
//                 <Comment name={ "강호동" } comment={ "저도 리액트 배워보고 싶습니다. " } />
//             </div>
//         );

    // 2. map 반복문 사용
    return(
        <div>
            { comments.map( (c) => {
               return(
                <Comment name={ c.name } comment={ c.comment } />
               );
            } ) }
        </div>
    );
}

// 컴포넌트 내보내기
export default CommentList