// alert("view");

// 1. list.js 에서 클릭된 게시물번호 호출
let bno = sessionStorage.getItem( "bno" );
    alert( bno+" 번 게시물" ); // 확인

if( bno == null ){alert("비정상적인 작동입니다.") }

/// 2. 클릭된 게시물번호의 게시물정보를 호출 하는 메소드
getboard()
function getboard(){
     $.ajax({
         url : "/board/getboard" ,
         type : "get" ,
         data : { "bno" : bno} ,
         success : function(re){ console.log( re ) }
     })
}

// 3. 삭제버튼 클릭시 호출 되는 메소드
function delboard(){
     $.ajax({
         url : "/board/delboard" ,
         type : "delete" ,
         data : { "bno" : bno} ,
         success : function(re){ location.href="/board/list" }
     })
}
