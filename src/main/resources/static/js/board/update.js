alert("update");

// 1. 세션스토리지 호출
let bno = sessionStorage.getItem("bno");

// 2. 수정 전의 게시물정보 호출
getboard()
function getboard() {
    $.ajax({
        url: "/board/getboard",
        type: "GET",
        data: { "bno": bno },
        success: function (re) { console.log(re ) }
    })
}

// 3. 수정버튼 클릭시 호출되는 메소드
function upboard(){
    let data = {
        btitle : document.querySelector('.btitle').value,
        bcontent : document.querySelector('.bcontent').value,
        bfile : document.querySelector('.bfile').value,
        bno : bno
    }
    $.ajax({
        url: "/board/upboard",
        type: "put",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function( re ){
            if( re == true ){
                alert("글수정 성공!!");
                localhost.href="/board/view";
            }
            else{ alert("글수정 실패.."); }
        }
    })
}



