; (function () {

    //LANG CHANGER
    let langChanger = {};
    langChanger.controlls = document.querySelectorAll('.lang-changer SPAN');
    langChanger.currentLang = localStorage.getItem('userLang') ? localStorage.getItem('userLang') : false;
    langChanger.init = function () {
        try {
            if (this.currentLang !== 'ru-RU') this.currentLang = 'en-US';
            langChanger.controlls.forEach(langElem => {
                if (langElem.dataset.lang === this.currentLang) langElem.classList.add('active');
                else langElem.classList.remove('active');
                langElem.addEventListener('click', function (e) {
                    e.preventDefault();
                    langChanger.change(this);
                })
            });
        } catch (err) {
            console.log(err);
        }
    }
    langChanger.change = function (elem) {
        try {
            if (elem.dataset.lang === this.currentLang) return;
            this.currentLang = elem.dataset.lang;
            localStorage.setItem('userLang', this.currentLang);
            this.controlls.forEach(langElem => {
                if (langElem.dataset.lang === this.currentLang) langElem.classList.add('active');
                else langElem.classList.remove('active');
            });
            if (this.currentLang === 'ru-RU') {
                window.location.assign('ru.html');
            } else if (this.currentLang === 'en-US') {
                window.location.assign('index.html');
            } else {
                window.location.assign('index.html');
            }
        } catch (err) {
            console.log(err);
        }
    }
    langChanger.init();





    // PRELOADER 
    function hidePreloader() {
        let animTime = 100,
            preloader = document.getElementById('preloader'),
            logo = document.querySelector('.logo');
        setTimeout(() => {
            logo.classList.remove('show');
            setTimeout(() => {
                preloader.style.transition = `visibility ease ${animTime}ms, opacity ease ${animTime}ms`;
                preloader.classList.remove('show');
            }, animTime);
        }, animTime)
    }
    window.addEventListener('load', hidePreloader);


    // MENU
    let menu = {};
    menu.overlayMenu = document.getElementById('overlay-menu');
    menu.openBtn = document.getElementById('open-menu-btn');
    menu.closeBtns = menu.overlayMenu.querySelectorAll('a');
    menu.content = document.getElementById('content-wrapper');

    menu.closeMenu = function closeMenu(e) {
        menu.overlayMenu.classList.remove('open');
        menu.content.classList.remove('hidden');
    }
    menu.openMenu = function (e) {
        menu.overlayMenu.style.transition = 'visibility ease 0.5s, transform ease 0.5s, opacity ease 0.5s';
        menu.overlayMenu.classList.add('open');
        menu.content.classList.add('hidden');
    }
    for (const closeBtn of menu.closeBtns) {
        closeBtn.addEventListener('click', menu.closeMenu);
    }
    menu.openBtn.addEventListener('click', menu.openMenu);


    // SMOOTH SCROLL
    const smoothLinks = document.querySelectorAll('a[href^="#"]')
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault()
            const id = smoothLink.getAttribute('href')

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }


    // TOP OFFRS
    let categories = document.querySelectorAll('#top-offers__category-block .category-item');
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        category.addEventListener('click', function (e) {
            e.preventDefault();
            for (let j = 0; j < categories.length; j++) {
                if (categories[j] == e.currentTarget) {
                    e.currentTarget.classList.toggle('active');
                } else {
                    categories[j].classList.remove('active');
                }
            }
        })
    }

    // REVIEW SLIDER
    let Rslider = {};
    Rslider.elem = document.getElementById('review-slider');
    Rslider.changeHeightelem = Rslider.elem.querySelector('.slides');
    Rslider.slids = Rslider.elem.querySelectorAll('.slides .slide');
    Rslider.nextBtn = Rslider.elem.querySelector('.controls .next-btn');
    Rslider.prevBtn = Rslider.elem.querySelector('.controls .prev-btn');
    Rslider.progressIndication = Rslider.elem.querySelector('.progress .indication');
    Rslider.currentSlideID = 0;
    Rslider.changeSliderHeight = function (el) {
        this.changeHeightelem.style.height = el.offsetHeight + 'px'
    }
    Rslider.changeProgress = function () {
        let progWidth = 100 / this.slids.length;
        this.progressIndication.style.width = progWidth + '%';
        this.progressIndication.style.left = progWidth * this.currentSlideID + '%';
    }
    Rslider.changeSlide = function () {
        if (!this.currentSlideElem) {
            this.currentSlideElem = this.slids[this.currentSlideID];
            this.changeSliderHeight(this.currentSlideElem);
            this.currentSlideElem.classList.add('active');
            this.changeProgress();
        } else {
            this.currentSlideElem.classList.remove('active');
        }
        this.currentSlideElem = this.slids[this.currentSlideID];
        this.changeSliderHeight(this.currentSlideElem);
        this.currentSlideElem.classList.add('active');
        this.changeProgress();
    }
    Rslider.nextSlide = function () {
        if (this.currentSlideID >= this.slids.length - 1) this.currentSlideID = 0;
        else this.currentSlideID++;
        this.changeSlide();
    }
    Rslider.prevSlide = function () {
        if (this.currentSlideID <= 0) this.currentSlideID = this.slids.length - 1;
        else this.currentSlideID--;
        this.changeSlide();
    }
    Rslider.nextBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Rslider.nextSlide();
    })
    Rslider.prevBtn.addEventListener('click', function (e) {
        e.preventDefault();
        Rslider.prevSlide();
    })
    Rslider.changeSlide();




    // MANGER SLIDER
    let Mslider = {};
    Mslider.slider = document.getElementById('manger-slider');
    Mslider.slids = Mslider.slider.querySelectorAll('.ring_gallery .slide');
    Mslider.slids.nextBtn = Mslider.slider.querySelector('.controls .next-btn');
    Mslider.slids.prevBtn = Mslider.slider.querySelector('.controls .prev-btn');
    Mslider.slids.progress = Mslider.slider.querySelector('.controls .progress');
    Mslider.slids.progressIndication = Mslider.slider.querySelector('.controls .progress .indication');
    Mslider.changeProgress = function () {
        if (window.innerWidth <= 967.8) {
            let progWidth = 100 / Mslider.slids.length;
            Mslider.slids.progressIndication.style.top = '';
            Mslider.slids.progressIndication.style.height = '';
            Mslider.slids.progressIndication.style.width = progWidth + '%';
            Mslider.slids.progressIndication.style.left = progWidth * Mslider.currentID + '%';
        }
        else {
            let progHeight = 100 / Mslider.slids.length;
            Mslider.slids.progressIndication.style.width = '';
            Mslider.slids.progressIndication.style.left = '';
            Mslider.slids.progressIndication.style.height = progHeight + '%';
            Mslider.slids.progressIndication.style.top = progHeight * Mslider.currentID + '%';
        }
    }
    Mslider.changeSlide = function () {
        if (Mslider.current && Mslider.previous && Mslider.next) {
            Mslider.previous.classList.remove('previous');
            Mslider.current.classList.remove('active');
            Mslider.next.classList.remove('next');
        }
        Mslider.current = Mslider.slids[Mslider.currentID];
        Mslider.previous = Mslider.slids[Mslider.previousID];
        Mslider.next = Mslider.slids[Mslider.nextID];
        Mslider.current.classList.add('active');
        Mslider.previous.classList.add('previous');
        Mslider.next.classList.add('next');
    }
    Mslider.nextSlide = function (e) {
        e.preventDefault();
        if (Mslider.previousID >= Mslider.slids.length - 1) Mslider.previousID = 0;
        else Mslider.previousID++;
        if (Mslider.currentID >= Mslider.slids.length - 1) Mslider.currentID = 0;
        else Mslider.currentID++;
        if (Mslider.nextID >= Mslider.slids.length - 1) Mslider.nextID = 0;
        else Mslider.nextID++;
        Mslider.changeSlide();
        Mslider.changeProgress();
    }
    Mslider.prevSlide = function (e) {
        e.preventDefault();
        if (Mslider.previousID <= 0) Mslider.previousID = Mslider.slids.length - 1;
        else Mslider.previousID--;
        if (Mslider.currentID <= 0) Mslider.currentID = Mslider.slids.length - 1;
        else Mslider.currentID--;
        if (Mslider.nextID <= 0) Mslider.nextID = Mslider.slids.length - 1;
        else Mslider.nextID--;
        Mslider.changeSlide();
        Mslider.changeProgress();
    }
    Mslider.slids.nextBtn.addEventListener('click', Mslider.nextSlide);
    Mslider.slids.prevBtn.addEventListener('click', Mslider.prevSlide);
    Mslider.currentID = 0
    Mslider.previousID = Mslider.slids.length - 1;
    Mslider.nextID = 1
    Mslider.changeSlide();
    Mslider.changeProgress();


    window.addEventListener("resize", function () {
        Mslider.changeProgress();
        Rslider.changeSlide();
    });
})();