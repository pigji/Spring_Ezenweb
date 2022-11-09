//alert('js연결')

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
