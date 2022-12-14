import React , { useState , useEffect } from 'react'
import axios from 'axios'
// npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic : 터미널에서 설치
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


let bcno = 0; // 선택한 카테고리 번호 [ 전역변수 ]
let bcontent = ''; // 입력받은 게시물 내용[ 전역변수 ]   // 변수가 수정될 경우 재랜더링할 필요x

export default function BoardWrite( props ) {

    // 0. userState 훅 사용
    const [ category , setCategory ] = useState('');            // 입력받은 카테고리명
    const [ categoryList , setCategoryList ] = useState([]);    // 서버로부터 가져온 카테고리 리스트

    // 1. 모든 카테고리 가져오기 함수 [ 실행조건 : 페이지가 [열렸을때] 렌더링 되었을때 ]
    function getbcategory() {
        axios
            .get("/board/bcategorylist")
            .then( res => { setCategoryList( res.data ); console.log( res )  } )
            .catch( err => { console.log( err ); } )
    }
    useEffect( getbcategory , [] ); // 페이지가 mount[생성] , unmount[사망]

    // 2. 입력된 카테고리 등록 함수 [ 실행조건 : 카테고리 등록 버튼 눌렀을때 ]
    const setbcategory = () => {
        if( category == '' ){ alert("카테고리명을 입력 후 등록해주세요"); return; }    // 유효성검사
        axios
            .post( "/board/setbcategory" , { bcname : category } )  // { 키:값 } 형태로 데이터 전달하기!!
            .then( res => {
                if( res.data == true ) { alert("카테고리 등록을 성공했습니다!"); getbcategory(); }
                else{ alert("카테고리 등록을 실패했습니다..ㅜ_ㅜ");  }
             })
            .catch( err => { console.log( err); } )
    }

    // 3. 입력받은 게시물 등록 함수 [ 실행조건 : 글쓰기 등록 버튼 눌렀을때 ]
    const setboard = () => {
        // 1. 카테고리 선택 유효성검사
        if( bcno == 0 ){ alert('카테고리를 선택해주세요.'); return; }

        let boardform = document.querySelector('.boardform');
        let formdata = new FormData( boardform );
        formdata.set( "bcno" , bcno );          // 폼데이터의 카테고리 번호 추가
        formdata.set( "bcontent" , bcontent );  // 폼데이터의 내용 추가
        axios
            .post("/board/setboard" , formdata , { headers: { 'Content-Type': 'multipart/form-data'  } }  )
            .then( res => {
                    console.log( res.data )
                    if( res.data == true ){ alert('게시물 작성을 성공했습니다!'); }
                    else{ alert('게시물 작성을 실패했습니다..ㅜ_ㅜ'); }
                })
            .catch( err => { console.log( err ); } )
    }

    return (
        <div>
            <h1> 글쓰기 페이지 </h1>
            <input type="text" value = {category} onChange={ (e)=> { setCategory( e.target.value ) }  } />
            <button type="button" onClick={ setbcategory }> 카테고리추가 </button>
            <div className="bcategorybox">
                {
                    categoryList.map( (c) => {
                        return (
                            <button
                                key = { c.bcno }
                                type="button"
                                onClick={ ()=>{ bcno = c.bcno; alert( bcno+"번 카테고리를 선택"); } } >
                                {c.bcname}
                            </button>
                        )
                    })
                }
            </div>

            <form className="boardform">
                제목 : <input type="text" name="btitle" />
                <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        bcontent = data
                        console.log( data ); } }
                />
                첨부파일 : <input type="file" name="bfile" />
                <button type="button" onClick={ setboard } >등록</button>
            </form>
        </div>
    );
}

/*
        1. class => className ,
        2. onclick => onClick ,
        3. <태그> </태그>  , <태그 /> ,
        4. setbcategory() -> { 변수명 }
*/