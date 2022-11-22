alert("수정페이지")

// 1. 세션스토리지 호출
let ino = sessionStorage.getItem("ino");
alert( ino+"번 게시물 수정")

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
            if( re == true ){
                alert("글수정 성공!!");
                localhost.href ="/index/list";
            }else{ alert("글수정 실패.."); }
        }
    })
}

