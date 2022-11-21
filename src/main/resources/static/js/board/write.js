//alert("글쓰기 적용");

// -------------- 전역변수 -----------------//
let bcno = 2; // 카테고리 번호   // 카테고리 기본값

// 1. 게시물 등록 버튼을 눌렀을때
function setboard(){

    let data = {
        btitle : document.querySelector('.btitle').value,
        bcontent : document.querySelector('.bcontent').value,
        bfile : document.querySelector('.bfile').value,
        bcno : bcno
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

// 2. 카테고리 등록버튼을 눌렀을때
function setbcategory(){
    let data = { bcname : document.querySelector(".bcname").value }
    $.ajax({
        url: "/board/setbcategory",
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: function(re) {
            alert( re )
            if( re == true ){
                alert("카테고리 추가 성공"); bcategorylist();
            }else{ alert("카테고리 추가 실패..") }
        }
    })
}

// 3. 모든 카레고리 출력
bcategorylist()
function bcategorylist(){
    $.ajax({
        url: "/board/bcategorylist",
        type: "get",
        success: function( re ){
            console.log( re );

            let html = "";
            re.forEach( c => {
                console.log( c );
                html += '<button type="button" onclick="bcnochage('+c.bcno+')">'+c.bcname+'</button>';
            })
            document.querySelector('.bcategorybox').innerHTML = html;
        }
    })
}
// 4. 카테고리를 선택했을때 선택된 카테고리 번호 대입
function bcnochage( cno ){ bcno = cno; alert(bcno+"번 클릭"); }




