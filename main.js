$('#content-work-icon').on('click', function (e) {
    $('.content-slide-work').slideToggle();
    $('.slide-icon-work').toggleClass('slide-open-icon-work');
});

$('#content-education-icon').on('click', function (e) {
    $('.content-slide-education').slideToggle();
    $('.slide-icon-education').toggleClass('slide-open-icon-education');
});

if ($('.content-form-disabled')) {
    $('.CTA-active').removeClass('CTA-active').addClass('CTA');
}

let estaVisivel = false;

$('.CTA').click(function () {
    // Alterna visibilidade com slide
    $('.closed-content-slide-form').slideToggle(300, function () {
        estaVisivel = $(this).is(':visible');

        // Alterna classes conforme visibilidade
        if (estaVisivel) {
            $('.CTA').removeClass('CTA').addClass('CTA-active');
            $('.content-form-disabled').removeClass('content-form-disabled').addClass('content-form-enabled');
        } else {
            $('.CTA-active').removeClass('CTA-active').addClass('CTA');
            $('.content-form-enabled').removeClass('content-form-enabled').addClass('content-form-disabled');
        }

        // Após o slideToggle, rolar para centralizar #contact-me na tela
        if (estaVisivel) {
            const offsetTop = $('#contact-me').offset().top;
            const sectionHeight = $('#contact-me').outerHeight();
            const windowHeight = $(window).height() + 70;

            const scrollTo = offsetTop - ((windowHeight - sectionHeight) / 2);

            $('html, body').animate({
                scrollTop: scrollTo
            }, 300); // tempo de rolagem suave
        }
    });
});

$('#content-slide-title').click(function () {
    $('.closed-content-slide-form').slideToggle(300, function () {
        estaVisivel = $(this).is(':visible'); // Verifica visibilidade após o efeito

        // Atualiza o texto do botão baseado no estado
        if (estaVisivel) {
            $('.CTA').removeClass('CTA').addClass('CTA-active');
            $('.content-form-disabled').removeClass('content-form-disabled').addClass('content-form-enabled');
        } else {
            $('.CTA-active').removeClass('CTA-active').addClass('CTA');
            $('.content-form-enabled').removeClass('content-form-enabled').addClass('content-form-disabled');
        }
    })
})

$(window).on('scroll', function () {
    const centroVertical = window.scrollY + window.innerHeight / 2;
    // Remover todas as classes primeiro
    $('.menu-start, .menu-tech-stack, .menu-projects, .menu-about-me, .menu-contact-me').removeClass('menu-start-hover menu-tech-stack-hover menu-projects-hover menu-about-me-hover menu-contact-me-hover');

    if (centroVertical <= $('#tech-stack').offset().top) {
        $('.menu-start').addClass('menu-start-hover');
    }

    if ((centroVertical >= $('#tech-stack').offset().top) && (centroVertical <= $('#projects').offset().top)) {
        $('.menu-tech-stack').addClass('menu-tech-stack-hover');
    }

    if ((centroVertical >= $('#projects').offset().top) && (centroVertical <= $('#about-me').offset().top)) {
        $('.menu-projects').addClass('menu-projects-hover');
    }

    if ((centroVertical >= $('#about-me').offset().top) && (centroVertical <= $('#contact-me').offset().top)) {
        $('.menu-about-me').addClass('menu-about-me-hover');
    }

});