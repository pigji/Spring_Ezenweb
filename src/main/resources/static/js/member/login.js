alert("로그인")

/* 로그인 버튼을 눌렀을때 */
function getmember(){

    let info = {
        memail : document.querySelector('.memail').value ,
        mpassword : document.querySelector('.mpassword').value
    }

    $.ajax({
        url: "/member/getmember",
        type: "POST",
        data : JSON.stringify( info ),
        contentType: "application/json",
        success: function(re){
            if( re == true ){
                alert("로그인 성공!!")
                location.href="/";  // 로그인 성공시 최상위 페이지로 이동
            }else{ alert("로그인 실패.."); }
         }
    })
}