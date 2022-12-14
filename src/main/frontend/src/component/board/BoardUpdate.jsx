import React , { useState , useEffect } from 'react'
import axios from 'axios'
// npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic : 터미널에서 설치
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from "react-router-dom"; // 라우터 DOM

let bcontent = ''   // 공백처리 [ 깡통처리 ]
export default function BoardUpdate( props ){
    const params = useParams();     // useParams 경로상의 변수를 불러옴.

    const [ board , setBoard ] = useState( { } );
    useEffect(
        () => axios.get( "/board/getboard" , { params : { bno : params.bno }} ) .then( res => { setBoard( res. data )} )
    , [] )

    const upboard = () => {  // 1. 서버로부터 수정된 정보를 이용한 게시물 수정 요청
        // 수정할 게시물번호, 수정할 내용들[ 제목, 내용, 첨부파일 ]
        let boardform = document.querySelector('.boardform');
        let formdata = new FormData( boardform );   // 수정할 제목, 첨부파일
        formdata.set( "bno" , board.bno );          // +수정할 게시물 번호[ 수정할 식별자 필수!! ]
        formdata.set( "bcontent" , bcontent );      // +수정할 게시물 내용

        axios.put( "/board/upboard", formdata, { headers : { 'Content-Type': 'multipart/form-data' }} )
            .then( res => {
                if( res.data == true ){ alert('게시물 수정 성공!!'); window.location.href='/board/list'; }
                else{ alert('게시물 수정 실패..'); }
            })
            .catch( err => { console.log( err ); })
    }

    return (
      <div>
         <h1> 수정 페이지 </h1>
         <form className="boardform">
             제목 : <input type="text" name="btitle" defaultValue={ board.btitle } />
             <CKEditor
                 editor={ ClassicEditor }
                 data={ board.bcontent }
                 onChange={ ( event, editor ) => {
                     const data = editor.getData();
                     bcontent = data
                     console.log( data ); } }
             />
             첨부파일 : <input type="file" name="bfile" />
             <button type="button" onClick={ upboard } > 수정 </button>
         </form>
      </div>
    );
} // end
/*
    React
        1. input type="text" value="" ReadOnly : true [ 읽기모드 - 기본값 ]
            // 수정 가능한 모드로 설정.
            1. value={ board.btitle } readOnly = false
            2. defaultValue = { board.btitle }
*/