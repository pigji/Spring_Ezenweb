alert("비회원제 게시판")

// 전역변수
let icno = 2;   // 카테고리 번호 기본값

// 1. 게시물등록 버튼을 눌렀을때
function setboard(){
    let data = {
        iname : document.querySelector('.iname').value,     // 작성자
        ititle : document.querySelector('.ititle').value,   // 제목
        icontent : document.querySelector('.icontent').value,   // 내용
        ifile : document.querySelector('.ifile').value,     // 첨부파일
        icno : icno     // 카테고리 번호
    }
    console.log(data)   // 확인

    $.ajax({
        url: "/index/setboard",
        type: "POST",
        data : JSON.stringify(data),
        contentType: "application/json",    // --> @RequestBody
        success: function( re ) {
            alert( re ) // 성공여부 true, false

            // 글등록 성공하면 list 페이지로 이동
            if( re == true ){
                alert("글작성 성공!!")
                location.href="/index/list"
            }else{ alert("글작성 실패.."); }
        }
    })
}

// 2. 카테고리 등록버튼 눌렀을때
function setbcategory(){
    let data = { icname : document.querySelector(".icname").value }
    $.ajax({
        url: "/index/setbcategory",
        type: "POST",
        data : JSON.stringify(data),
        contentType: "application/json",
        success : function( re ){
            alert( re )
            if( re == true ){
                alert("카테고리 등록 성공!!");
                icategorylist();
            }else{ alert("카테고리 등록 실패..") }
        }
    })
}

// 3. 모든 카테고리 출력
icategorylist()
function icategorylist(){
    $.ajax({
        url: "/index/icategorylist",
        type: "get",
        success: function( re ) {
            console.log( re );

            let html = "";
            re.forEach( c => {
                console.log( c );
               html += '<button type="button" onclick="bcnochage('+c.icno+')">'+c.icname+'</button>';
            })
            document.querySelector('.bcategorybox').innerHTML = html;
        }
    })
}

// 4. 카테고리를 선택했을때 선택된 카테고리 번호 대입
function bcnochage( ino ){ icno = ino; alert( icno+"번 클릭"); }
