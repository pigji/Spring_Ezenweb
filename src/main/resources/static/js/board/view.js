// alert("view");

// 1. list.js 에서 클릭된 게시물번호 호출
let bno = sessionStorage.getItem( "bno" );
    alert( bno+"번 게시물" ); // 확인

if( bno == null ){alert("비정상적인 작동입니다.") }

/// 2. 클릭된 게시물번호의 게시물정보를 호출 하는 메소드
getboard()

function getboard( no ){
    let bno = sessionStorage.getItem( "bno" );
        alert( bno+"번 게시물 보기" ); // 확인

     $.ajax({
         url : "/board/getboard" ,
         type : "get" ,
         data : { "bno" : bno } ,
         success : function(re){
            console.log( re )


                 let html1 =  '<h3> 상세보기 </h3>'+
                               '제목 : <input type="text" class="bbtitle" readonly/><br>'+    // readonly/ : input 비활성화( 입력창 막기 )
                               '내용 : <input type="text" class="bbtcontent" readonly/><br>'+
                               '파일 : <input type="text" class="bbtfilename" readonly/><br>';

                               console.log( html1 )
                               document.querySelector('.v_list').innerHTML = html1;
                               //
                               document.querySelector('.bbtitle').value = re.btitle
                               document.querySelector('.bbtcontent').value = re.bcontent
                               document.querySelector('.bbtfilename').value = re.bfilename

         }
     })
}

// 3. 삭제버튼 클릭시 호출 되는 메소드
function delboard(){
     $.ajax({
         url : "/board/delboard" ,
         type : "delete" ,
         data : { "bno" : bno } ,
         success : function(re){ location.href="/board/list" }
     })
}
