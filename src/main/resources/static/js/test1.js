alert('js연결')

/* 1. @RequestMapping --> hello World 출력 */
function getMapping1(){
    alert('1번')
    $.ajax({
        url: "/api/v1/get-api/hello" ,
        success: function( re ) { alert( re ); }
    })
}

/* 2. @GetMapping --> name : Flature 출력 */
function getMapping2(){
    alert('2번')
    $.ajax({
        url: "/api/v1/get-api/name" ,
        success: function( re ) { alert( re ); }
    })
}

/* 3. @PostMapping --> 매개변수 없는 GET메소드 구현 : 입력한 값 호출 */
function getMapping3(){
    alert('3번')
    $.ajax({
        url: "/api/v1/get-api/variable1/{variable}" ,
        success: function( re ) { alert( re ); }
    })
}

/* 4. @PathVariable을 활용한 GET 메소드 구현 : 입력한 값 호출 */
function getMapping4(){
    alert('4번')
    $.ajax({
        url: "/api/v1/get-api/variable2/지혜" ,
        success: function( re ) { alert( re ); }
    })
}

/* 4-2. [비교] @RequestMapping을 활용한 GET 메소드 구현 : 입력한 값 호출 */
function getMapping5(){
    alert('4-2번')
    $.ajax({
        url: "/api/v1/get-api/variable3?variable=지혜!" ,
        success: function( re ) { alert( re ); }
    })
}

/* 5. @RequestParam */
function getMapping6(){
    alert('5번')
    $.ajax({
        url: "/api/v1/get-api/variable1/request1?name=지혜&email=qwe@ane.com&organization=qerqerq" ,
        success: function( re ) { alert( re ); }
    })
}

/* 6. @RequestParam Map */
function getMapping7(){
    alert('6번')
    $.ajax({
        url: "/api/v1/get-api/request2" ,
        success: function( re ) { alert( re ); }
    })
}

/* 7. DTO */
function getMapping8(){
    alert('7번')
    $.ajax({
        url: "/api/v1/get-api/request3" ,
        success: function( re ) { alert( re ); }
    })
}
/* -------------------------------------------------------------------- */
function postMapping1(){
    alert('1번')
    $.ajax({
        url: "/api/v1/post-api/domain",
        type: "POST",
        success: function( re ) { alert( re ); }
    })
}

function postMapping2(){
   let member = {
        name : "유재석",
        email : "qwe@ane.com",
        organization : "qerqerq"
   }

    alert('2번')
   $.ajax({
        url: "/api/v1/post-api/member",
        type : "post",
        data : JSON.stringify(member),
        contentType: "application/json",    // 전송타입 : application/json
        success : function( re ) { alert( re ); }
   })
}

function postMapping3(){
    alert('3번')
    $.ajax({
        url: "/api/v1/post-api/member2",
        type : "post",
        data : JSON.stringify(member),
        contentType: "application/json",    // 전송타입 : application/json
        success : function( re ) { alert( re ); }
    })
}
/* -------------------------------------------------------------------------------- */
function putMapping1(){
    alert('1번')
    $.ajax({
        url: "/api/v1/put-api/member",
        type: "PUT",
        data : JSON.stringify(member),
        contentType: "application/json",
        success: function( re ) { alert( re ); }
    })
}

function putMapping2(){
    let member = {
            name : "유재석",
            email : "qwe@ane.com",
            organization : "qerqerq"
       }

       alert('2번')
       $.ajax({
            url: "/api/v1/post-api/member1",
            type : "PUT",
            data : JSON.stringify(member),
            contentType: "application/json",    // 전송타입 : application/json
            success : function( re ) { console.log( re ); }
       })
}

function putMapping3(){
    let member = {
            name : "유재석",
            email : "qwe@ane.com",
            organization : "qerqerq"
       }

       alert('2번')
       $.ajax({
            url: "/api/v1/post-api/member2",
            type : "PUT",
            data : JSON.stringify(member),
            contentType: "application/json",    // 전송타입 : application/json
            success : function( re ) {
                    console.log( re );
                    console.log( re.name );
                    // let json = JSON.parse( re ); console.log( json );
            }

       })
}
/* ----------------------------------------------------------------------------------- */
function deleteMapping1(){
    alert('1번')
    $.ajax({
        url: "/api/v1/post-api/하하하1",
        type: "DELETE",
        success: function( re ) { alert( re ); }
    })
}

function deleteMapping2(){
    alert('2번')
    $.ajax({
        url: "/api/v1/post-api/request1?variable=하하하하2",
        type: "DELETE",
        success: function( re ) { alert( re ); }
    })
}