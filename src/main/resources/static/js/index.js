alert("index 페이지")

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
                    '<a href=""><button type="button" onclick="logout()"> 로그아웃 </button></a>'+
                    '<a href="/member/findpassword"><button type="button"> 비밀번호 찾기 </button></a>'+
                    '<a href="/member/update"><button type="button"> 회원정보 수정 </button></a>'+
                    '<a href="/member/delete"><button type="button"> 회원탈퇴 </button></a>'
            }
            document.querySelector(".headerbox").innerHTML = headerbox;
        }
    })
}

/* 로그아웃 */
function logout(){
    alert("로그아웃 버튼 누름")
    $.ajax({
        url: "/member/logout",
        type: "get",
        success: function( re ){
            alert( re )
            if( re == true ){
                alert("로그아웃 성공")
                location.href = "localhost:8080"
            }else{
                alert("로그아웃 실패..")
            }
        }

    })
}

