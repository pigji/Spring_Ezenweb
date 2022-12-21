import React , { useState ,useEffect , useRef  } from 'react'
import axios from 'axios'

export default function Home( props ) {

    /* ---------  룸 데이터 ------------------*/
    const [ roomList , setRoomList ] = useState([]);
    // useEffect( ()=>{ axios } , [] );
    useEffect( ()=>{
        axios.get("/room/getroomlist")
                .then( re => {  setRoomList( re.data ); console.log( re.data ); } )
                .catch( e => { console.log( e ); } )
    } , [] )

    /*---------- 카카오 지도 api ------------*/
        const mapContainer = useRef( null );
        const { kakao } = window;
        const mapOption =  { center: new kakao.maps.LatLng( 36.2683, 127.6358  ), level: 10 };

        useEffect( () => {
            var map = new kakao.maps.Map( mapContainer.current , mapOption); // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            // 2.
                 // 마커 클러스터러를 생성합니다
                 var clusterer = new kakao.maps.MarkerClusterer({
                     map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
                     averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                     minLevel: 5 // 클러스터 할 최소 지도 레벨
                 });
                /* ------- 마커 이미지 --------------- */
                var markerImageUrl = 'http://localhost:8080/static/media/roomicon.b818afd964f981aed393.png',
                    markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
                    markerImageOptions = {
                        offset : new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
                    };
                var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);
                console.log( roomList );


                // ** 데이터를 가져와서 마커 생성후에 클러스터에 추가
                 var markers = roomList.map( ( position ) => {
                            // 가져온 데이터의 좌표들을 반복문 돌리면서 [ 1. * 마커 생성 ]
                            // [ 2. 생성된 마커들을 markers 에 저장 ] map반복문 return
                     let marker = new kakao.maps.Marker({
                         position: new kakao.maps.LatLng( position.rlat, position.rlng ), // 마커의 좌표
                         image : markerImage, // 마커의 이미지
                         map: map // 마커를 표시할 지도 객체
                     });

                     // 마커에 클릭이벤트를 등록합니다
                      kakao.maps.event.addListener(marker, 'click', function() {
                             alert("사이드바 열린다~ " +position.rtitle + position.rno+"번")
                      });

                      return marker;
                 });
                 clusterer.addMarkers(markers); // 클러스터러에 마커들을 추가합니다
        })

    return(
        <div>
            {/*카카오 map api */ }
            <div id="map" ref={ mapContainer } style={{width:'100%',height:'800px'}} >  </div>
        </div>
    )
} // end