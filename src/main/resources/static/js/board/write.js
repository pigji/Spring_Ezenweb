//alert("글쓰기 적용");

// 등록 버튼을 눌렀을때
function setboard(){

    let data = {
        btitle : document.querySelector('.btitle').value,
        bcontent : document.querySelector('.bcontent').value,
        bfile : document.querySelector('.bfile').value
    }

    $.ajax({
        url : "/board/setboard",
        type : "POST",
        data : JSON.stringify(data),
        contentType : "application/json",   // --> @RequestBody
        success : function( re ) {
            alert( re )
            // 만일 글등록을 성공하면 list페이지로 이동
            if( re == true ){
                alert("글작성 성공!!")
                location.href="/board/list"
            }
            else{ alert("글작성 실패.."); }
        }
    })
}
