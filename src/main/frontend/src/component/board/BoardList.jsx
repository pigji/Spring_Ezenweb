import React , { useState , useEffect } from 'react'
import axios from 'axios'
import Pagination from 'react-js-pagination' // npm i react-js-pagination 설치

export default function BoardList(){

    // 1. 메모리
   const [ pageInfo , setPageInfo ] = useState({ bcno : 0 , page : 1 , key : "" , keyword:""  }) // 1. 요청 정보 객체 state
   const [ boardDto , setBoardDto ] = useState( { list : [] } )                                // 1. 게시물 리스트 state
   const [ bcategory , setBcategoryList ] = useState( [ ] )                                      // 1. 카테고리 리스트

    // ------------------------ 1. 게시물 ---------------------------------//
    function getboardlist( ){
        axios
            .post( "/board/boardlist" ,  pageInfo )
            .then( res => {  console.log( res.data );  setBoardDto( res.data ); } )
            .catch( err => { console.log( err ); } )
    }
    // 렌더링될 때 그리고 *** pageInfo 변결될 때 마다
    useEffect( getboardlist , [ pageInfo ] )  // 페이지가 mount[생성], unmount[사망]      // [] 대괄호 빼고 실행하면 무한반복 실행

    // ------------------------ 2. 카테고리 ---------------------------------//
    function getBcategory(){    // 카테고리 리스트 가져오기
        axios.get("/board/bcategorylist")
             .then( res => { setBcategoryList( res.data ); } )
             .catch( err => { console.log( err); } )
    }
    useEffect( getBcategory , [ ] )  // mount, unmount

    // 카테고리 버튼을 선택했을 때
    const onCategory = ( bcno ) =>{ setPageInfo( { bcno : bcno , page : 1 , key : "" , keyword:""  } ) }
    // ---------------------------------------------------------------------//

    // ------------------------ 3. 페이징 ---------------------------------//
    const onPage = ( page ) => {
        setPageInfo(
            {   bcno : pageInfo.bcno ,          // 기존 카테고리
                page : 1 ,                      // 현재 페이지
                key : pageInfo.key ,            // 기존 검색 필드명
                keyword : pageInfo.keyword  }   // 기존 검색할 단어
        )
    }

    // ------------------------------------------------------------------ //
    // ------------------------ 4. 검색 ---------------------------------- //
    const onSearch = () => {
        setPageInfo(
            {   bcno : pageInfo.bcno ,  // 카테고리 검색 [ 기존 그대로 : pageInfo.bcno ]
                page : 1 ,              // 검색시 첫페이지부터 보여주기 [ 1 ]
                key : document.querySelector('.key').value ,    // 검색할 필드명
                keyword : document.querySelector('.keyword').value }    // 검색할 단어
        )
    }
    //
    const loadView = ( bno ) => {
        window.location.href = '/board/view/'+bno
    }

    return (
        <div>
            <a href="/board/write">글쓰기[로그인했을때만표시]</a>
            <h1> 글 목록 페이지 </h1>

            <div className="bcategorybox">
                <button type="button" onClick = { ()=> onCategory( 0 ) }> 전체보기 </button>

                {
                    bcategory.map( (c) => {
                        return(
                            <button type="button" onClick = { ()=> onCategory( c.bcno ) }>{c.bcname}</button>
                        )
                    })
                }
            </div>

            <table className="btable">
                {
                    boardDto.list.map( (b) => {
                        return(
                            <tr>
                                <td> { b.bno } </td>
                                <td onClick={ ( ) => loadView( b.bno ) }> { b.btitle } </td>
                                <td> { b.memail } </td>
                                <td> { b.memail } </td>
                                <td> { b.bdate } </td>
                                <td> { b.bview } </td>
                            </tr>
                        )
                    } )
                }
            </table>

            { /* 페이징 처리 */ }
            <Pagination
                activePage={ pageInfo.page  }
                itemsCountPerPage = { 3 }
                totalItemsCount = { boardDto.totalBoards }
                pageRangeDisplayed = { 5 }
                onChange={ onPage }
            />

            { /* 검색 처리 */ }
            <div className="searchBox">
               <select className="key">
                    <option value="btitle">제목</option>
                    <option value="bcontent">내용</option>
               </select>
               <input type="text" className="keyword" />
               <button type="button" onClick={ onSearch }> 검색 </button>
            </div>
        </div>
    );
}
