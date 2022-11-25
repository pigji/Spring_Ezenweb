alert("비밀번호찾기")

/* 비밀번호찾기 버튼을 눌렀을때 */
function findpassword(){

    let memail = document.querySelector('.memail').value

    $.ajax({
        url: "/member/getpassword",
        type: "get",
        data : { "memail" : memail } ,
        success: function( re ){
            alert(re)
            location.href="/";
        }
    })
}
