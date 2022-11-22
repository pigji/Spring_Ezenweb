//alert("비회원제 게시판목록")

// ------ 전역변수 ----- //
let icno = 0;   // 선택된 카테고리 , 기본값 0 : 전체보기

// 1. 세션스토리지 호출
let ino = sessionStorage.getItem("ino");



// 1. 게시물 출력
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





// 3. 모든 카테고리 출력
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

// 4. 카테고리를 선택했을때 번호 대입
function bcnochage( ino ){
    icno = ino; alert( icno+"번 카테고리 선택");
    boardlist();
}

// 1. 게시물등록 버튼을 눌렀을때
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

// 2. 카테고리 등록버튼 눌렀을때
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



// 1. list.js 에서 클릭한 게시물번호 호출
//let ino = sessionStorage.getItem("ino");
//    alert( ino+"번 게시물") // 확인



// 4. 게시물 삭제버튼을 눌렀을때
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

// 2. 수정 전 게시물정보 호출 [ 개별 게시물 호출 ]
getboard()
function getboard(){
    $.ajax({
        url : "/index/getboard",
        type : "get",
        data : { "ino" : ino },
        success : function(re) { console.log( re ) }
    })
}

// 3. 수정하기 버튼을 눌렀을때
function upboard(){
    let data = {
        ititle : document.querySelector('.ititle').value,
        icontent : document.querySelector('.icontent').value,
        ifile : document.querySelector('.ifile').value,
        ino : ino
    }

    $.ajax({
        url : "/index/upboard",
        type : "put",
        data : JSON.stringify(data),
        contentType: "application/json",
        success : function( re ) {
            console.log( re );

            let html = '<h3> 게시물 수정페이지 '+
                        '</h3> <tr> <th> 번호 </th> <th> 제목 </th> <th> 작성자 </th></tr>';
                        list.forEach( (d) => {
                              html +=
                                   '<tr> <td> '+b.ino+' </td> <td onclick="getview('+b.ino+')">'+b.ititle+' </td> '+
                                   ' <td><button type="button" onclick="upboard('+b.ino+')"> 수정 </button></td> ' +
                                  ' <td><button type="button" onclick="delboard('+b.ino+')"> 삭제 </button></td></tr>';
                        })
                        document.querySelector(".btable").innerHTML = html;


            if( re == true ){
                alert("글수정 성공!!");
                boardlist()
            }else{ alert("글수정 실패.."); }
        }
    })
}

