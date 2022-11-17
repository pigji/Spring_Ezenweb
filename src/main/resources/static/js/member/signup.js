//alert("회원가입")

// 1. 회원가입하기 버튼을 눌렀을때
function setmember(){

    let info = {
        memail : document.querySelector('.memail').value ,
        mpassword : document.querySelector('.mpassword').value,
        mphone : document.querySelector('.mphone').value
    }

    let timerbox = document.querySelector('.timerbox').innerHTML
    if( timerbox != "인증성공" ){ alert("이메일 인증해주세요."); return; }

    $.ajax({
        url : "/member/setmember",
        type : "POST",
        data : JSON.stringify( info ) ,
        contentType : "application/json",
        success : function(re) { alert(re) }
    })
}

// 2. 인증코드 요청
let auth = 1234;         // 발급된 인증코드
let timer = 0;          // 인증시간
let timerinter= null;   // setInterval 함수객체

function getauth(){
    // 1. 입력받은 이메일
    let toemail = document.querySelector('.memail').vaule

    // 2. 입력바든 이메일에게 인증코드 전송하고 전송된 인증코드를 반환
    $.ajax({
        url: "/member/getauth",
        data: { "toemail": toemail },
        type: "get",
        success: function( re ){
            auth = re;  // 응답받은 인증코드를 전역변수에 대입
            console.log( auth )
            alert("해당 이메일로 인증코드 발송")
            document.querySelector('.getauthbtn').innerHTML = "재인증코드받기" // 버튼의 입력된 문자 변경
            timer = 120 // 초 단위 [ 120초 ]
            settimer()  // 타이머 함수 실행
        }
    })
}

// 4. 타이머 함수 [
function settimer(){

    // 1. setinterval( function(){ 실행문; }, 밀리초 );   // 일정 간격으로 함수 실행 [ 밀리초 100 --> 1초 ]
    // 2. clearInterval( 객체명 ); // Interval 종료

    timerinter = setInterval( function(){
        let minutes, seconds;
            minutes = parseInt( timer / 60 );   // 분
            seconds = parseInt( timer % 60 );   // 초
                // 삼항연산자 : 조건 ? 참 : 거짓
                minutes = minutes < 10 ? "0"+minutes : minutes      // 만약에 3분이면 03표시    / 15분이면 15표시
                seconds = seconds < 10 ? "0"+seconds : seconds      // 만약에 3초이면 03       / 15초이면 15
            let timehtml = minutes + " : "+seconds; // 시 : 분 html 구성
            document.querySelector('.timerbox').innerHTML = timehtml;   // 시간 html 대입
            // 종료조건
            timer--;    // 1초씩 차감
            if( timer < 0 ){    // 시간이 0초가 되면
                clearInterval( timerinter )   // setInterval 사용중인 객체 clear(종료)
                alert("인증에 실패하였습니다.")
                auth = null;    // 발급 인증코드 초기화
                document.querySelector('.getauthbtn').innerHTML = "인증코드받기"  // 버튼의 입력된 문자 변경
            }
    } , 1000 );   // 1초 간격으로 실행
}

// 3. 인증 버튼을 눌렀을때
function authcode(){
    let authinput = document.querySelector('.authinput').value // 입력받은 인증코드
    if( authinput == auth ){    // 입력받은 인증코드와 발급된 인증코드와 동일하면
        alert("인증코드 일치")
        clearInterval( timerinter )   //Interval 클리어
        auth = null;
        timer = 0;
        document.querySelector('.timerbox').innerHTML = "인증성공"
    }else{
        alert("인증코드 불일치..")
    }
}