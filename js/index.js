// 즉시실행 함수(전체 영역과 구분 하기 위해 모듈화)
(function (window, document) {
    'use strict'; // 자바스크립트 온리
    
    // toggle
    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    // resize
    window.addEventListener('resize', function() {
        // console.log('resized');
        if(window.innerWidth > 1024){
            // off Toggle element
            offElements();
        }
    });

    // classList
    function toggleElements() {
        [].forEach.call($toggles, function(toggle) { //빈(유사)배열.forEach반복.call(유사배열 연결), 갯수에 상관 없이 처리
            toggle.classList.toggle('on');
        }); 
    };
    // off toggle
    function offElements() {
        [].forEach.call($toggles, function(toggle) { //빈(유사)배열.forEach반복.call(유사배열 연결), 갯수에 상관 없이 처리
            toggle.classList.remove('on');
        }); 
    };

})(window, document);
//윈도우, 도큐먼트 객체


// 지도 API
function initMap() {
    // 위도(Latitude), 경도(Longitude)
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    }

    const map = new google.maps.Map(document.getElementById('map'), {//객체
        center: myLatLng, //어느 위도경도에 출력되는가
        scrollwheel: false, //지도 안에서 스크롤 휠 사용X
        zoom: 18 //확대된 수치
    });

    const marker = new google.maps.Marker({ //마커
        position: myLatLng,
        map: map,
        title: 'GITHUB'
    });
}

