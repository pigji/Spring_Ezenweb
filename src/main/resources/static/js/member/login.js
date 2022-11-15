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
        success: function(re){ alert( re ); }
    })
}