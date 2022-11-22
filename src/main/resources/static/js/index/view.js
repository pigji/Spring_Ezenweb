alert("view 페이지")

// 1. list.js 에서 클릭한 게시물번호 호출
let ino = sessionStorage.getItem("ino");
    alert( ino+"번 게시물") // 확인

// 2. 게시물 번호가 없을때
if( ino == null ){ alert("알 수 없는 동작입니다. ") }

// 3. 클릭한 게시물번호의 게시물 정보를 호출하는 메소드
getboard()
function getboard(){
     $.ajax({
         url : "/index/getboard" ,
         type : "get" ,
         data : { "ino" : ino } ,
         success : function(re){ console.log( re ) }
     })
}

// 4. 게시물 삭제버튼을 눌렀을때
function delboard(){
    $.ajax({
        url : "/index/delboard",
        type : "delete",
        date : { "ino" : ino },
        success : function( re ) {
            if( re == true ){
                alert("삭제 성공!!")
                localhost.href="/index/list";
            }else{
                alert("삭제 실패..");
            }
        }
    })
}

