var slide_thumbnail = new Swiper(".slide-thumbnail", {
    slidesPerView: 5,
    direction: 'vertical',
    spaceBetween: 20,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            direction: 'horizontal',
        },
        1000: {
            direction: 'vertical',
        }
    }
});

const progressSlide = document.querySelector('.js-progress');

var slide_hero = new Swiper(".slide-principal", {
    effect: 'fade',
    thumbs: {
        swiper: slide_thumbnail
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    on: {
        init: function() {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('animate');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionStart: function() {
            progressSlide.classList.remove('animate');
            progressSlide.classList.remove('active');
            progressSlide.classList.add('active');
        },
        slideChangeTransitionEnd: function() {
            progressSlide.classList.add('animate');
        },
    },
});

const allFilters = document.querySelectorAll('.js-nav-games li a');
const tabPane = document.querySelectorAll('.tab-pane-games');

allFilters.forEach((filter, index) => {
    filter.addEventListener('click', (e) => {
        e.preventDefault();

        allFilters.forEach(item => {
            item.classList.remove('active');
        });

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        });

        tabPane[index].classList.add('active');
        filter.classList.add('active');
    })
})

const btnMenuMobile = document.querySelector('.btn-mobile');
const menuMobile = document.querySelector('.menu-mobile');
const MenuSite = document.querySelectorAll('.js-menu');

btnMenuMobile.addEventListener('click', () => {
    MenuSite.forEach(itemMenu => {
        itemMenu.classList.remove('active');
        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        });
    })
    menuMobile.classList.toggle('active');
});

const btnOpenModal = document.querySelectorAll('.js-open-modal');
const btnCloseModal = document.querySelectorAll('.js-close');

btnOpenModal.forEach ((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let tagHtml = document.documentElement;
    
        menuMobile.classList.remove('active');
        tagHtml.classList.add('show-modal');
    })
    
    btnCloseModal.forEach((groupClose) => {
        groupClose.addEventListener('click', () => {
            let tagHtml = document.documentElement;
        
            tagHtml.classList.remove('show-modal');
        })
    })
});

const btnMenu = document.querySelectorAll('.js-btn-menu');

btnMenu.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        MenuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {
                itemMenu.classList.remove('active');
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active');
                });
            });
        })

        menuMobile.classList.remove('active');

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        });

        btn.classList.add('active');
        MenuSite[index].classList.add('active');
    });
});

const btnMenu2 = document.querySelectorAll('.menu-mobile .js-btn-menu');

btnMenu2.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        MenuSite.forEach(itemMenu => {
            itemMenu.classList.remove('active');
            itemMenu.addEventListener('mouseleave', () => {
                itemMenu.classList.remove('active');
                btnMenu.forEach(itemBtn => {
                    itemBtn.classList.remove('active');
                });
            });
        })

        menuMobile.classList.remove('active');

        btnMenu.forEach(itemBtn => {
            itemBtn.classList.remove('active');
        });

        btn.classList.add('active');
        MenuSite[index].classList.add('active');
    });
});