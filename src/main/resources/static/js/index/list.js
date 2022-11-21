alert("비회원제 게시판목록")

// ------ 전역변수 ----- //
let icno = 0;   // 선택된 카테고리 , 기본값 0 : 전체보기

// 1. 게시물 출력
boardlist()
function boardlist(){
    $.ajax({
        url: "/index/boardlist",
        type: "GET",
        date: { "icno" : icno },    // icno : 카테고리 번호
        success: function( list ){
            console.log( list )

            let html = '<tr> <th> 번호 </th> <th> 제목 </th> <th> 작성자 </th></tr>';
            list.forEach( (b) => {
                  html +=
                       '<tr>  <td> '+b.ino+' </td> <td onclick="getview('+b.ino+')">'+b.ititle+' </td> </tr>';
            })
            document.querySelector(".btable").innerHTML = html;
        }

    })
}

// 2. 게시물 조회 [ 페이지 전환 ]
function getview( ino ){
    // 1. 클릭한 게시물번호 저장
    sessionStorage.setItem( "ino", ino );
    // 2. 페이지전환
    location.href ="/index/view";
}

// 3. 모든 카테고리 출력
bcategorylist()
function bcategorylist(){
    $.ajax({
        url: "/index/bcategorylist",
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
function bcnochage( icno ){
    ino = icno; alert( icno+"번 카테고리 선택");
    boardlist();
}