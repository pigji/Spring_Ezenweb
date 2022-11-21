//alert("index 페이지")

getloginMno();

/* 로그인 여부를 판단 */
function getloginMno(){
    $.ajax({
        url: "/member/getloginMno",
        type: "get",
        success: function( re ) {
            //alert( re )
            let headerbox = '';

            if( re == "0" ){    // 로그인 안했을 경우
                headerbox =
                            '<a href="/member/signup"><button type="button"> 회원가입 </button></a>'+
                            '<a href="/member/login"><button type="button"> 로그인 </button></a>'
            }else{  // 로그인 했을 경우
                headerbox =
                    '<a href="/board/write"><button type="button"> 글쓰기 </button></a>'+
                    '<a href=""><button type="button" onclick="logout()"> 로그아웃 </button></a>'+
                    '<a href="/member/findpassword"><button type="button"> 비밀번호 찾기 </button></a>'+
                    '<a href="/member/update"><button type="button"> 회원정보 수정 </button></a>'+
                    '<a href="/member/delete"><button type="button"> 회원탈퇴 </button></a>'
            }
            document.querySelector(".headerbox").innerHTML = headerbox;
        }
    })
}

/* 로그아웃 버튼을 눌렀을때 [ 서버에 있는 세션을 초기화 ] */
function logout(){
    alert("로그아웃 버튼 누름")
    $.ajax({
        url: "/member/logout",      // 요청 URL
        type: "get",                // 요청 메소드
        success: function( re ){    // 응답
            alert( re )
            if( re == true ){       // 로그아웃 성공했을때
                alert("로그아웃 성공")
                location.href = "/"  // index.html 반환해주는 매핑 주소
                       // location.href = URL 주소 값
            }else{
                alert("로그아웃 실패..")
            }
        }

    })
}

/* 회원목록 가져오기 */
list()
function list(){

    $.ajax({
        url: "/member/list",
        type: "get",
        success: function(list){
            console.log( list )

            let html = '<tr> <th> 번호 </th> <th> 이메일 </th> <th> 비밀번호 </th></tr>';
            list.forEach( (m) => {
                    html +=
                    '<tr> <th>'+m.mno+'</th> <th>'+m.memail+'</th> <th>'+m.mpassword+'</th> </tr>';
            })
            document.querySelector(".mtable").innerHTML = html;
        }
    })
}

/* 비회원제 게시판 */
function inboardlist(){

}