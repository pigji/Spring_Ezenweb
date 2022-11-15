alert("회원가입")

/* 가입하기 버튼을 눌렀을때 */
function setmember(){

    let info = {
        memail : document.querySelector('.memail').value ,
        mpassword : document.querySelector('.mpassword').value
    }

    $.ajax({
        url : "/member/setmember",
        type : "POST",
        data : JSON.stringify( info) ,
        contentType : "application/json",
        success : function(re) { alert(re) }
    })
}