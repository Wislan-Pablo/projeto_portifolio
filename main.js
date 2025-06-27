$('#content-work-icon').on('click', function (e) {
    $('.content-slide-work').slideToggle();
    $('.slide-icon-work').toggleClass('slide-open-icon-work');
});

$('#content-education-icon').on('click', function (e) {
    $('.content-slide-education').slideToggle();
    $('.slide-icon-education').toggleClass('slide-open-icon-education');
});

$('#content-slide-title').on('click', function (e) {
    $('#content-slide-form').slideToggle();
    $('.slide-icon-form').toggleClass('slide-open-icon-form');
});

$(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    const alturaJanela = $(window).height();
    const alturaScroller = scrollTop + alturaJanela;

    // Remover todas as classes primeiro
    $('.menu-tech-stack, .menu-projects, .menu-about-me, .menu-contact-me').removeClass('menu-tech-stack-hover menu-projects-hover menu-about-me-hover menu-contact-me-hover');

    // Adicionar classes conforme a posição do scroll
    if (alturaScroller <= $('#tech-stack').offset().top + 450) {
        $('.menu-start').addClass('menu-start-hover');
    }

    if ((alturaScroller >= $('#tech-stack').offset().top + 450) && (alturaScroller <= $('#projects').offset().top + 500)) {
        $('.menu-start').removeClass('menu-start-hover');
        $('.menu-tech-stack').addClass('menu-tech-stack-hover');
    }

    if ((alturaScroller >= $('#projects').offset().top + 500) && (alturaScroller <= $('#about-me').offset().top + 500 <= $('#about-me').offset().top + 500)) {
        $('.menu-tech-stack').removeClass('menu-tech-stack-hover');
        $('.menu-projects').addClass('menu-projects-hover');
    }

    if ((alturaScroller >= $('#about-me').offset().top + 500) && (alturaScroller <= $('#contact-me').offset().top + 500)) {
        $('.menu-projects').removeClass('menu-projects-hover');
        $('.menu-about-me').addClass('menu-about-me-hover');
    }

    if (alturaScroller >= $('#contact-me').offset().top + 440) {
        $('.menu-about-me').removeClass('menu-about-me-hover');
        $('.menu-contact-me').addClass('menu-contact-me-hover');
    }
    /*
        if (alturaScroller >= $('#contact-me').offset().top + 450) {
            $('.menu-tech-stack').removeClass('menu-contact-me-hover');
            $('.menu-contact-me').addClass('menu-contact-me-hover');
        }
    */
});



