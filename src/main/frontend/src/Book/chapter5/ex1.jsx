
// 1. Props 사용법 [ p.148 ]
functionApp( props ){
    // 1. <컴포넌트명 />
    // 2. <컴포넌트명 속성명="문자열", 속셩명={숫자}>
    // props.속성명
    // 키=값, 키=값 형태
    return(
        <Profile name="소플"  introduction="안녕하세요. 소플입니다."  viewCount = {1500} />

    ); // return end
} // end

/*
    // 1.
    function Profile( props ){
        console.log( props );
    }
    // 2.
        {
            name : "소플"
            introduction : "안녕하세요. 소플입니다."
            viewCount : {1500}
        }
*/

// 2. [ p .149 ]
function App(){
    return(
        <Layout // Layout : 컴포넌트
            width={2560}    // Layout 컴포넌트에 width 속성 전달
            height={1440}   // Layout 컴포넌트에 height 속성 전달
            header={ <Header title="소플의 블로그입니다. " /> }   // Layout 컴포넌트에 header 컴포넌트 전달
            footer={ <Footer /> }   // Layout 컴포넌트에 footer 컴포넌트 전달
        />
    )
}