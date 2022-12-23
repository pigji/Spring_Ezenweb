/* 1.임포트 */
import React , {  useState , useEffect , useRef } from 'react';
import {useDaumPostcodePopup} from 'react-daum-postcode'; // npm i react-daum-postcode
import axios from 'axios';
import icon from '../../img/roomicon.png';  // 아이콘 이미지 불러오기
    // spring 통합 배포시 : resources -> static -> static -> media -> 배포된 이미지 존재
    // http://localhost8080/static/media/roomicon.식별16진수.png
        // 서로 다른 컴포넌트 간 동일한 사진의 이름이 존재할 수 있으므로 식별 16진수 추가


// 3.컴포넌트[함수] 만들기
export default function RoomWrite( props ){

    /* ------------ 카카오 주소 api   -------------------*/
    // 0.검색된 주소,위도,경도 저장하는 state
    const [ address , setAddress ] = useState( { name : '' , lat : '' , lng : '' } );
    // 1. 다음 주소 API 사용하기 위한 API 스트립트
    const open  = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
    // 2. 주소 검색 버튼을 클릭했을때 이벤트
    const handleClick =  () => { open({ onComplete: handleComplete });  };
    // 3. 다음 주소 검색 결과 이벤트
    const handleComplete = (data) => {
        // 4. 주소 --> 좌표 변환
            // 1. 카카오 주소정보검색 Rest API 쿼리스트링 이용해서 주소F 전달
        axios.get("https://dapi.kakao.com/v2/local/search/address.json?query="+data.address
            // 2. 요청 옵션에 인증키[RestAPI KEY]
         , { headers : { Authorization : 'KakaoAK be37a5bd7580f9f4a9ed5a3e4bba8fe5' } } )
            // 3. 요청 결과 [ 카카오 문서 참고 -  X[lng] : 경도  Y[lat] : 위도 ] https://developers.kakao.com/docs/latest/ko/local/dev-guide
         .then( res => {
            // 4. json 결과 에서 좌표 추출
            const location = res.data.documents[0];
            // 5.  state 업데이트 후 [ mapOption에 찾은 좌표 넣어주기 ]
            setAddress(  { name : data.address , lat : location.y , lng : location.x }  )
         })
    };
    /*---------- 카카오 지도 api ------------*/
        const mapContainer = useRef( null );    // 1. useRef() 재렌더링시 초기화 X
        const { kakao } = window;               // 2. window 객체 [ 현재 window 전역객체 -> 메모리 정보 담겨져 있는 객체 ]
        // 1. 상위에 있는 js에서 kakao 객체 필요
        // <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b7c0acb1395b016fc6b2661dad73840f"></script>

        const mapOption =  {                    // 3. 지도 옵션 [ 위치 , 확대 레벨 ]
            center: new kakao.maps.LatLng( address.lat , address.lng  ), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        useEffect( () => {                      // 4. 렌더링 할때마다 map 생성   // mapContainer.current : 지도가 표시되는 div
            // 1. 해당 div에 옵션을 넣은 map 객체 생성
            var map = new kakao.maps.Map( mapContainer.current , mapOption); // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            // 2.
                // 마커 이미지의 주소
                var markerImageUrl = 'http://localhost:8080/static/media/roomicon.b818afd964f981aed393.png',
                    markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
                    markerImageOptions = {
                        offset : new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
                    };

                // 마커 이미지를 생성한다
                var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

                // 지도에 마커를 생성하고 표시한다
                var marker = new kakao.maps.Marker({
                    position: new kakao.maps.LatLng( address.lat , address.lng ), // 마커의 좌표
                    image : markerImage, // 마커의 이미지
                    map: map // 마커를 표시할 지도 객체
                });
        })

    /* ------------------------------------*/
        // 4. 방 등록 버튼을 눌렀을때 이벤트
        const onWrite = () => {
            // 1. 방 이름, 가격, 거래방식, 여러개 이미지, 좌표[ 주소, 위도, 경도 ] --> 컨트롤러 --> 서비스 --> DB 저장
            // 1-1. 폼 전체 전송
            let roomform = document.querySelector('.roomform')
            let formdata = new FormData( roomform );    // 1. 폼 전체
            formdata.set( "rname", address.name );      // 2. 폼 전체 + 주소 정보
            formdata.set( "rlat", address.lat );        // 2. 폼 전체 + 좌표[ 위도 ]
            formdata.set( "rlng", address.lng );        // 2. 폼 전체 + 좌표[ 경도 ]
            console.log( formdata );
            //3. 서버에게 요청
            axios.post("/room/setroom", formdata, { headers: { 'Content-Type': 'multipart/form-data'  } } )
                .then( re =>{
                    if( re.data == true ){ alert("방이 등록되었습니다."); window.location.href="/"; }
                    else{ alert("방 등록을 실패했습니다.."); }
                })
        }

    /* ------------------------------------------ */
    /* ------------ 5. html or jsx표현식 { }------------------*/
    return(
        <>
            <h3> 방 등록 </h3>
            <form className="roomform">
                방이름 : <input type="text" name="rtitle" />
                가격 : <input type="text" name="rprice" />
                거래방식 :
                    <select name="rtrans">
                        <option value="매매"> 매매 </option>
                        <option value="전세"> 전세 </option>
                        <option value="월세"> 월세 </option>
                    </select>
                이미지 : <input type="file" multiple="multiple" name="rimg" />

                {/*카카오 주소 api */ }
                위치[좌표] :
                        <div> { address.name } </div>
                        <button type='button' onClick={handleClick}>
                           방 위치 찾기
                         </button>

                {/*카카오 map api */ }
                {  /* jsx 스타일링[카멜표기법 margin-top -> marginTop ]
                        // style = { { 속성 : 값 , 속성 = 값 , 속성 = 값 }} */
                }
                <div
                    id="map"
                    ref={ mapContainer }
                    style={{width:'100%',height:'350px'}} >
                </div>
                <button type="button" onClick={ onWrite }>등록 </button>
            </form>
        </>
    )
    /* -------------------------------------------*/
} // end