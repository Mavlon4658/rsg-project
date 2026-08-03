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

const toTopBtn = document.querySelector('.to-top__btn');

if (toTopBtn) {
    toTopBtn.onclick = e => {
        e.preventDefault();
        window.scrollTo(0, 0);
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
                btn.querySelector('input').value = item.textContent;
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

const cottageSwpBtns = document.querySelectorAll('.cottage .cottage-swp button');

if (cottageSwpBtns.length) {
    cottageSwpBtns.forEach(btn => {
        btn.onclick = () => {
            cottageSwpBtns.forEach(el => {
                if (el == btn) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const articleHeadBtns = document.querySelectorAll('.article .article-head button');

if (articleHeadBtns.length) {
    articleHeadBtns.forEach(btn => {
        btn.onclick = () => {
            articleHeadBtns.forEach(el => {
                if (el == btn) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const informationTabBtns = document.querySelectorAll('.information .tab-btn a');

if (informationTabBtns.length) {
    informationTabBtns.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            informationTabBtns.forEach(el => {
                if (el == btn) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const videoReviewBtns = document.querySelectorAll('.video-review__navs a');

if (videoReviewBtns.length) {
    videoReviewBtns.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            videoReviewBtns.forEach(el => {
                if (el == btn) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
        }
    })
}

const resultBtns = document.querySelectorAll('.result-btns a');

if (resultBtns.length) {
    resultBtns.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            resultBtns.forEach(el => {
                if (el == btn) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            })
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

if (objectLayoutContentItem.length) {
    objectLayoutContentItem.forEach(item => {
        let mainImgs = item.querySelectorAll('.main-img');
        let btn = item.querySelector('button');

        btn.onclick = () => {
            document.querySelector('.layout-modal').classList.add('active');
            document.querySelectorAll('.layout-modal .modal-content .main-img').forEach((img, imgIdx) => {
                img.setAttribute('src', mainImgs[imgIdx].getAttribute('src'));
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

const modalClasses = ['.thanks-modal', '.question-modal', '.video-modal', '.layout-modal'];
if (modalClasses.length) {
    modalClasses.forEach(cls => {
        const m = document.querySelector(cls);
        const mBg = document.querySelector(cls + ' .modal-bg');
        const mCloseBtn = document.querySelector(cls + ' .modal-close');
        const mOpenBtns = document.querySelectorAll(cls + '__open');
        const mCloseBtn2 = document.querySelectorAll(cls + ' .btn-close');
        const iframeVideo = document.querySelector(cls + ' iframe');

        if (m) {
            const closeVideo = () => {
                iframeVideo.contentWindow.postMessage(
                    JSON.stringify({
                        event: "command",
                        func: "pauseVideo",
                        args: []
                    }),
                    "*"
                );
            }

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
                if (iframeVideo) closeVideo();
            }
    
            if (mCloseBtn) {
                mCloseBtn.onclick = () => {
                    bodyVisible();
                    m.classList.remove('active');
                    if (iframeVideo) closeVideo();
                }
            }
            
            if (mCloseBtn2.length) {
                mCloseBtn2.forEach(btn => {
                    btn.onclick = () => {
                        bodyVisible();
                        m.classList.remove('active');
                        if (iframeVideo) closeVideo();
                    }
                })
            }
        }
    });
}

const furnitureContent = document.querySelector('.furniture-content');
const furnitureContentBtn = document.querySelector('.furniture-content .more-link');

if (furnitureContent) {
    furnitureContentBtn.onclick = () => {
        furnitureContent.classList.toggle('active');
    }
}

var articleSwpInit = false;
var articleSwp;
function articleSwpFunction() {
    if (window.innerWidth <= 992) {
        if (!articleSwpInit) {
            articleSwpInit = true;
            articleSwp = new Swiper(".article-page__navs-swp", {
                slidesPerView: "auto",
                spaceBetween: 8,
                navigation: {
                    nextEl: '.article-page__navs .btn-next',
                    prevEl: '.article-page__navs .btn-prev',
                }
            });
        }
    } else if (articleSwpInit) {
        articleSwp.destroy();
        articleSwpInit = false;
    }
}
articleSwpFunction();
window.addEventListener("resize", articleSwpFunction);

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    const inputs = contactForm.querySelectorAll("input");
    const submitBtn = contactForm.querySelector(".btn-main");

    submitBtn.addEventListener("click", () => {
        let isValid = true;

        inputs.forEach(input => {
            const valid = input.type === "tel"
                ? input.value.length === 17
                : input.value.trim().length >= 3;

            input.classList.toggle("error", !valid);

            if (!valid) isValid = false;
        });

        if (!isValid) return;

        document.querySelector(".thanks-modal").classList.add("active");
        inputs.forEach(input => (input.value = ""));
        contactForm.querySelector('.form-select__btn').classList.remove('selected');
        contactForm.querySelector('.form-select__btn span').textContent = 'Выбор интереса';
    });
}

const objectPriceCard = document.querySelectorAll(".object-price__card, .special-program__card");

if (objectPriceCard.length) {
    objectPriceCard.forEach(card => {
        let btn = card.querySelector('button');
        btn.onclick = () => {
            card.classList.toggle('active');
        }
    })
}

const modernizationCards = document.querySelectorAll('.modernization-card__img');

if (modernizationCards.length) {
    modernizationCards.forEach(btn => {
        let img = btn.querySelector('img');

        btn.onclick = () => {
            document.querySelector('.layout-modal').classList.add('active');
            document.querySelectorAll('.layout-modal .modal-content .main-img').forEach(data => {
                data.setAttribute('src', img.getAttribute('src'));
            })
        }
    })
}

const furnitureContainer = document.querySelector('.furniture-container');
const furnitureBtn = document.querySelector('.furniture-head button');

if (furnitureContainer) {
    furnitureBtn.onclick = () => {
        furnitureContainer.classList.toggle('active');
    }
}

const elementContainer = document.querySelector('.object-element__container');
const elementBtn = document.querySelector('.object-element__head button');

if (elementContainer) {
    elementBtn.onclick = () => {
        elementContainer.classList.toggle('active');
    }
}

const modernizationContainer = document.querySelector('.modernization-container');
const modernizationBtn = document.querySelector('.modernization-head button');

if (modernizationContainer) {
    modernizationBtn.onclick = () => {
        modernizationContainer.classList.toggle('active');
    }
}

const cottageHomeContent = document.querySelector('.cottage-home__content');
const cottagehomeContentBtn = document.querySelector('.cottage-home__content .btn-main');

if (cottageHomeContent) {
    cottagehomeContentBtn.onclick = () => {
        cottageHomeContent.classList.toggle('active');
    }
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

    if (objectPriceCard.length) {
        objectPriceCard.forEach(card => {
            if (!card.querySelector('button').contains(event.target) && !card.querySelector('.description').contains(event.target)) {
                card.classList.remove('active')
            }
        })
    }
    
    if (objectLayoutTexts.length) {
        objectLayoutTexts.forEach(el => {
            if (!el.contains(event.target)) el.classList.remove('active');
        })
    }
})