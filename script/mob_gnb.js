// sec01 mob_menu_bar
const header = document.querySelector('header');
const mobMenu = document.querySelector('.mob_menu_bar');

mobMenu.addEventListener('click', ()=>{
    header.classList.toggle('mOpen');
    if (!header.classList.contains('mOpen')) {
        closeMOpen();
    }
})

isWide();

// mob_gnb
const gnbItems = document.querySelectorAll('.gnb_menu > li');

gnbItems.forEach(li => {
    li.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();

            const isActive = li.classList.contains('active');

            gnbItems.forEach(item => {
                item.classList.remove('active');
            });

            if (!isActive) {
                li.classList.add('active');
            }
        }
    });
});

function closeMOpen(){
    gnbItems.forEach(li => {
        li.classList.remove('active');
    });
}

function isWide(){
    window.addEventListener('resize', () =>{
        if (window.innerWidth > 1024) {
            header.classList.remove('mOpen');
        }
    })
}