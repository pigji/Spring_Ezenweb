alert("글쓰기 적용");

// 등록 버튼을 눌렀을때
function setboard(){

    let data = {
        btitle : document.querySelector('.btitle').value,
        bcontent : document.querySelector('.bcontent').value
    }

    $.ajax({
        url : "/board/setboard",
        type : "POST",
        data : JSON.stringify(data),
        contentType : "application/json",   // --> @RequestBody
        success : function( re ) { alert( re );}
    })
}
