// lang
const lang = document.querySelector('.lang');
const langIcon = lang.querySelector('i');

lang.addEventListener('click', (e) => {
    e.preventDefault();
    
    lang.classList.toggle('active');
    langIcon.classList.toggle('fa-angle-down');
    langIcon.classList.toggle('fa-angle-up');
});





// sec02_tab active
const sec02TabBtn = document.querySelectorAll('.sec02_tab li');

sec02TabBtn.forEach((btn, idx)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        
        sec02TabBtn.forEach(li=>li.classList.remove('active'));

        btn.classList.add('active');
        sec02TabBtn[idx].classList.add('active');
    })
})
sec02TabBtn[0].classList.add('active');  



// sec02 swiperJs
var sec02Swiper = new Swiper('.sec02_slide', {
    // slidesPerView: 5,
    // slidesPerGroup: 5,
    spaceBetween: 16,

    breakpoints: {
        0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        579: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1023: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    },

    navigation: {
        nextEl: '.sec02_right',
        prevEl: '.sec02_left',
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


const playBtn = document.querySelector('.play_btn');

if (playBtn) {
    console.log('playBtn :>> ', playBtn);
    playBtn.addEventListener('click', () => {
        // 오토플레이가 실행 중인지 확인
        if (sec02Swiper.autoplay.running) {
            sec02Swiper.autoplay.stop();
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        } else {
            sec02Swiper.autoplay.start();
            playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
    });
}



const tabs = document.querySelectorAll('.sec02_tab > li');
const slides = document.querySelectorAll('.card');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        const category = tab.dataset.category;

        slides.forEach(slide => {
            const categories = slide.dataset.category.split(' ');

            if (category === 'all' || categories.includes(category)) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
        sec02Swiper.update();
    });
});


// sec03 - 목록 hover시 추천 전시가 바뀌는 탭
const items = document.querySelectorAll('.sec03_list li');

const title = document.querySelector('.sec03_tit');
const date = document.querySelector('.sec03_date');
const poster = document.querySelector('.sec03_poster img');
const bg = document.querySelector('#sec03 .bg');

const sec03Txt = document.querySelector('.sec03_txt');
const sec03Poster = document.querySelector('.sec03_poster');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {

        items.forEach(item => {
            item.classList.remove('active');
        });

        item.classList.add('active');

        title.textContent = item.querySelector('a').textContent;
        date.textContent = item.dataset.date;
        poster.src = item.dataset.img;
        bg.style.backgroundColor = item.dataset.bg;


        // 기존 애니메이션 제거
        sec03Txt.classList.remove('is-change');
        sec03Poster.classList.remove('is-change');
        
        // 애니메이션 재실행
        void sec03Txt.offsetWidth;

        sec03Txt.classList.add('is-change');
        sec03Poster.classList.add('is-change');
    });
});

sec03Txt.classList.add('is-change');
sec03Poster.classList.add('is-change');
items[0].classList.add('active');



// sec04
const sec04List = document.querySelectorAll('.sec04_list li');
const sec04Tab = document.querySelectorAll('.sec04_tab');

sec04List.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        sec04List.forEach(li => li.classList.remove('on'));
        sec04Tab.forEach(tab => tab.style.display = 'none');

        btn.classList.add('on');
        sec04Tab[idx].style.display = 'block';
    });
});

sec04List[0].classList.add('on');
sec04Tab[0].style.display = 'block';


// 화면 내의 모든 가상 링크 클릭 시 화면 스크롤 막아줌
const a = document.querySelectorAll('a');

a.forEach((anchor) => {
    anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');

        if(href === '#'){
            e.preventDefault();
        }
    })
})