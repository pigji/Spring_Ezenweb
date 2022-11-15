alert("탈퇴하기")

/* 탈퇴하기 버튼을 눌렀을때 */
function setdelete(){

    let mpassword = document.querySelector(".mpassword").value

    $.ajax({
        url : "/member/setdelete" ,
        type : "delete",
        data : { "mpassword" :  mpassword },
        success : function(re) { alert(re) }
    })

}