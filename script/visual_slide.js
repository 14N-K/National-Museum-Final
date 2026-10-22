const visualSwiper = new Swiper('.visual_slide', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.visual_pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.visual_right_btn',
        prevEl: '.visual_left_btn',
    },
    on: {        
        init: function (swiper) {
            updateBackground(swiper);
        },
        slideChange: function (swiper) {
            updateBackground(swiper);
        }
    }
});

// 배경 이미지 동기화 함수
function updateBackground(swiper) {
    const visual = document.querySelector('.visual');
    const activeSlide = swiper.slides[swiper.activeIndex];
    
    if (activeSlide) {
        const activeImg = activeSlide.querySelector('img.desktop');
        if (activeImg) {
            const imgSrc = activeImg.getAttribute('src');
            visual.style.backgroundImage = `url('${imgSrc}')`;
        }
    }
}

const visualPlayBtn = document.querySelector('.visual_play_btn');

if (visualPlayBtn) {
    console.log('visualPlayBtn :>> ', visualPlayBtn);
    visualPlayBtn.addEventListener('click', () => {
        // 오토플레이가 실행 중인지 확인
        if (visualSwiper.autoplay.running) {
            visualSwiper.autoplay.stop();
            visualPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            visualSwiper.autoplay.start();
            visualPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    });
}
