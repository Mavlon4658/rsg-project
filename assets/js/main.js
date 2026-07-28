const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const headerAccordionBtn = document.querySelector('.header-accordion__btn');
const headerAccordion = document.querySelector('.header-accordion');

if (headerAccordionBtn) {
    headerAccordionBtn.addEventListener('click', () => {
        headerAccordion.classList.toggle('active');
    });
}

const menuAccordionBtn = document.querySelector('.menu-accordion__btn');
const menuAccordion = document.querySelector('.menu-accordion');

if (menuAccordionBtn) {
    menuAccordionBtn.addEventListener('click', () => {
        menuAccordion.classList.toggle('active');
    });
}

const menu = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menu-close');
const headerBars = document.querySelector('.header .header-bars');

if (menu) {
    headerBars.onclick = () => {
        menu.classList.add('active');
    }

    menuCloseBtn.onclick = () => {
        menu.classList.remove('active');
    }
}

const formSelects = document.querySelectorAll('.form-select');

if (formSelects.length) {
    formSelects.forEach(el => {
        const btn = el.querySelector('.form-select__btn');
        const list = el.querySelectorAll('.form-select__list li');

        btn.onclick = () => {
            el.classList.toggle('active');
        }

        list.forEach(item => {
            item.onclick = () => {
                el.classList.remove('active');
                btn.classList.add('selected');
                btn.querySelector('span').textContent = item.textContent;
            }
        })
    })
}

const cottageSwp = new Swiper('.cottage-swp', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    breakpoints: {
        1100: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
})

const cottageTabBtns = document.querySelectorAll('.cottage-swp button');
const cottageTabContents = document.querySelectorAll('.cottage-content__item');

if (cottageTabContents.length) {
    cottageTabBtns.forEach((btn, btnIdx) => {
        btn.onclick = () => {
            cottageTabContents.forEach((el, idx) => {
                if (idx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
            cottageTabBtns.forEach((el, idx) => {
                if (idx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
        }
    })
}

const galleryTabBtns = document.querySelectorAll('.gallery .tab-btn button');
const galleryContentItems = document.querySelectorAll('.gallery-content__item');

if (galleryContentItems.length) {
    galleryTabBtns.forEach((btn, btnIdx) => {
        btn.onclick = () => {
            galleryTabBtns.forEach((el, idx) => {
                if (idx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
            galleryContentItems.forEach((el, idx) => {
                if (idx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const objectLayoutTexts = document.querySelectorAll('.object-layout__text');

if (objectLayoutTexts.length) {
    objectLayoutTexts.forEach(item => {
        const btn = item.querySelector('.object-layout__text-btn');

        btn.onclick = () => {
            objectLayoutTexts.forEach(el => {
                if (el == item) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const objectLayoutTabBtns = document.querySelectorAll('.object-layout .tab-btn button');
const objectLayoutContentItem = document.querySelectorAll('.object-layout__content-item');

if (objectLayoutTabBtns.length) {
    objectLayoutTabBtns.forEach((btn, btnIdx) => {
        btn.onclick = () => {
            objectLayoutTabBtns.forEach((el, idx) => {
                if (idx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
            objectLayoutContentItem.forEach((el, idx) => {
                if (idx == btnIdx) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const fullProjectsContent = document.querySelector('.full-projects__content');
const fullProjectsContentBtn = document.querySelector('.full-projects__content .btn-main');

if (fullProjectsContent) {
    fullProjectsContentBtn.onclick = () => {
        fullProjectsContent.classList.add('active');
    }
}

const fullProjectsCards = document.querySelectorAll('.full-projects__card');
if (fullProjectsCards.length) {
    fullProjectsCards.forEach(card => {
        const btn = card.querySelector('button');
        if (btn) {
            btn.onclick = () => {
                card.classList.toggle('active')
            }
        }
    })
}

const modernizationContent = document.querySelector('.modernization-content');
const modernizationContentBtn = document.querySelector('.modernization-content .btn-main');

if (modernizationContent) {
    modernizationContentBtn.onclick = () => {
        modernizationContent.classList.add('active');
    }
}

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
    accordions.forEach((item) => {
        const accBtn = item.querySelector('.accordion-btn');
        const accContent = item.querySelector('.accordion-body__wrap');
    
        accBtn.addEventListener('click', () => {
            item.classList.toggle('active')
            accContent.style.maxHeight = accContent.style.maxHeight ? null : accContent.scrollHeight + 'px';
        });
    });
}

const videReviewNavs = new Swiper('.video-review__navs', {
    slidesPerView: 'auto',
    spaceBetween: 20,
})

const searchResultBtn = new Swiper('.search-result .result-btns', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    breakpoints: {
        992: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        }
    }
})

const faqSearchInp = document.querySelector('.faq-search input');
const faqSearchInpBtn = document.querySelector('.faq-search button');

if (faqSearchInp) {
    faqSearchInp.oninput = () => {
        console.log('hi');
        if (faqSearchInp.value.length > 1) {
            faqSearchInpBtn.classList.remove('hidden');
        } else {
            faqSearchInpBtn.classList.add('hidden');
        }
    }
    faqSearchInpBtn.onclick = () => {
        faqSearchInp.value = "";
        faqSearchInpBtn.classList.add('hidden');
    }
}

const modalClasses = ['.thanks-modal', '.question-modal'];
if (modalClasses.length) {
    modalClasses.forEach(cls => {
        const m = document.querySelector(cls);
        const mBg = document.querySelector(cls + ' .modal-bg');
        const mCloseBtn = document.querySelector(cls + ' .modal-close');
        const mOpenBtns = document.querySelectorAll(cls + '__open');
        const mCloseBtn2 = document.querySelectorAll(cls + ' .btn-close');

        if (m) {
            mOpenBtns.forEach(btn => {
                btn.onclick = e => {
                    bodyHidden();
                    e.preventDefault();
                    m.classList.add('active');
                }
            })
    
            mBg.onclick = () => {
                bodyVisible();
                m.classList.remove('active');
            }
    
            mCloseBtn.onclick = () => {
                bodyVisible();
                m.classList.remove('active');
            }
            
            if (mCloseBtn2.length) {
                mCloseBtn2.forEach(btn => {
                    btn.onclick = () => {
                        bodyVisible();
                        m.classList.remove('active');
                    }
                })
            }
        }
    });
}







window.addEventListener('click', function (event) {
    if (headerAccordion && !headerAccordion.contains(event.target)) {
        headerAccordion.classList.remove('active');
    }

    if (formSelects.length) {
        formSelects.forEach(el => {
            if (!el.contains(event.target)) el.classList.remove('active');
        })
    }
    
    if (objectLayoutTexts.length) {
        objectLayoutTexts.forEach(el => {
            if (!el.contains(event.target)) el.classList.remove('active');
        })
    }
})