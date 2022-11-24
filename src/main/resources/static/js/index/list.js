//alert("비회원제 게시판목록")

// ------ 전역변수 ----- //
let icno = 0;   // 선택된 카테고리 , 기본값 0 : 전체보기

// 1. 세션스토리지 호출
let ino = 0;

// ---------------- 1. 카테고리 등록버튼을 눌렀을때  ------------------- //
function setbcategory(){
    let data = { icname : document.querySelector(".icname").value }
    $.ajax({
        url: "/index/setbcategory",
        type: "POST",
        data : JSON.stringify(data),
        contentType: "application/json",
        success : function( re ){
            alert( re )
            if( re == true ){
                alert("카테고리 등록 성공!!");
                icategorylist();
            }else{ alert("카테고리 등록 실패..") }
        }
    })
}

// ---------------- 2. 모든 카테고리 출력 ------------------- //
icategorylist()
function icategorylist(){
    $.ajax({
        url: "/index/icategorylist",    // Controller 응답, 요청 주소
        type: "get",
        success: function( re ){
            console.log( re );

            let html = '<button type="button" onclick="bcnochage(0)"> 전체보기 </button>';
            re.forEach( c => {
                console.log( c );
                html += '<button type="button" onclick="bcnochage('+c.icno+')">'+c.icname+'</button>';
            })
            document.querySelector('.bcategorybox').innerHTML = html;
        }
    })
}

// ---------------- 2-2. 카테고리를 선택했을때 번호 대입 ------------------- //
function bcnochage( ino ){
    icno = ino; alert( icno+"번 카테고리 선택");
    boardlist();
}

// ---------------- 3. 게시물 등록버튼을 눌렀을때  ------------------- //
function setboard(){
    let data = {
        iname : document.querySelector('.iname').value,     // 작성자
        ititle : document.querySelector('.ititle').value,   // 제목
        icontent : document.querySelector('.icontent').value,   // 내용
        ifile : document.querySelector('.ifile').value,     // 첨부파일
        icno : icno     // 카테고리 번호
    }
    console.log(data)   // 확인

    $.ajax({
        url: "/index/setboard",
        type: "POST",
        data : JSON.stringify(data),
        contentType: "application/json",    // --> @RequestBody
        success: function( re ) {
            alert( re ) // 성공여부 true, false

            // 글등록 성공하면 list 페이지로 이동
            if( re == true ){
                alert("글작성 성공!!")
                location.href="/index/list"
            }else{ alert("글작성 실패.."); }
        }
    })
}

// ---------------- 4. 게시물 출력 ------------------- //
boardlist()
function boardlist(){
    $.ajax({
        url: "/index/boardlist",    // Controller 응답, 요청 주소
        type: "GET",
        data: { "icno" : icno },    // icno : 카테고리 번호
        success: function( list ){
            console.log( list )

            let html = '<tr> <th> 번호 </th> <th> 제목 </th> <th> 작성자 </th></tr>';
            list.forEach( (b) => {
                  html +=
                       '<tr> <td> '+b.ino+' </td> <td onclick="getview('+b.ino+')">'+b.ititle+' </td> '+
                       ' <td><button type="button" onclick="upboard('+b.ino+')"> 수정 </button></td> ' +
                      ' <td><button type="button" onclick="delboard('+b.ino+')"> 삭제 </button></td></tr>';
            })
            document.querySelector(".btable").innerHTML = html;
        }
    })
}


// ---------------- 5. 게시물 삭제버튼을 눌렀을때 ------------------- //
function delboard(ino){
    $.ajax({
        url : "/index/delboard",
        type : "delete",
        data : { "ino" : ino },
        success : function( re ) {
            if( re == true ){
                alert("삭제 성공!!")
                boardlist()
            }else{
                alert("삭제 실패..");
            }
        }
    })
}

// ---------------- 6. 게시물 수정 전 내용 호출 ------------------- //
getboard()
function getboard(){
    $.ajax({
        url : "/index/getboard",
        type : "get",
        data : { "ino" : ino },
        success : function(re) { console.log( re ) }
    })
}


// ---------------- 7. 수정버튼을 눌렀을때 ------------------- //
// 수정하기 버튼 눌렀을때 수정창 열림
function upboard( no ){
    ino = no;
    alert( ino+"번 게시물 수정 클릭" )

    $.ajax({
        url : "/index/getboard",
        type : "get",
        data : { "ino" : ino },
        success : function(re) {

             let html2 =  '<h3> 수정페이지 </h3>'+
                            '제목 : <input type="text" class="upititle">'+
                            '내용 : <input type="text" class="upicontent">'+
                            '파일 : <input type="text" class="upifile">'+
                            '<button type="button" onclick="upupboard()"> 수정 </button>';

                            console.log(html2)
                            document.querySelector('.up').innerHTML = html2;

                            // 수정한 내용 저장
                            document.querySelector('.upititle').value = re.ititle
                            document.querySelector('.upicontent').value = re.icontent
                            document.querySelector('.upifile').value = re.ifile


         }
    })
}
// 수정 내용 입력후 수정완료 버튼을 눌렀을때
function upupboard( ){

        let data = {
            ititle : document.querySelector('.upititle').value,
            icontent : document.querySelector('.upicontent').value,
            ifile : document.querySelector('.upifile').value,
            ino : ino
        }

            $.ajax({
                url : "/index/upboard",
                type : "put",
                data : JSON.stringify(data),
                contentType: "application/json",
                success : function( re ) {
                    if( re == true ){
                        alert("글수정 성공!!");
                        boardlist()
                    }else{ alert("글수정 실패.."); }
                }
            })

}
/*

         수정 js
        1. 수정버튼을 클릭한다.
        2. 클릭한 게시물의 번호를 저장한다,
        3. 저장된 게시물의 번호를 가지고 수정할 페이지에 게시물정보 대입한다.
        4. 수정버튼을 클릭했을때 게시물번호+수정할내용 ajax 컨트롤에게 보낸다.


*/


