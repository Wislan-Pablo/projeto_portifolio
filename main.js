function addFocusName() {
    // adicona foco no input name
    setTimeout(function () {
        $('#name').focus();
    }, 1000);
}

// Animação de slides para experiência profissional e educação
$('#content-work-icon').on('click', function () {
    $('.content-slide-work').slideToggle();
    $('.slide-icon-work').toggleClass('slide-open-icon-work');
});

$('#content-education-icon').on('click', function () {
    $('.content-slide-education').slideToggle();
    $('.slide-icon-education').toggleClass('slide-open-icon-education');
});

// Garante que o botão comece como CTA (não ativo)
if ($('.content-form-disabled')) {
    $('.CTA-active').removeClass('CTA-active').addClass('CTA');
}

let estaVisivel = false;

// Manipulador para clique dinâmico em .CTA e .CTA-active
$(document).on('click', '.CTA, .CTA-active', function (e) {
    e.preventDefault();

    const $form = $('.closed-content-slide-form, .open-content-slide-form');
    const offsetTop = $('#contact-me').offset().top;
    const sectionHeight = $('#contact-me').outerHeight();
    const windowHeight = $(window).height() + 60; // adiciona um padding top de 60 na animação do scroll
    const scrollTo = offsetTop - ((windowHeight - sectionHeight) / 2);

    const limiteInferiorTela = $(window).scrollTop() + windowHeight;
    const fundoFormulario = $('#contact-me').offset().top + $('#contact-me').outerHeight();

    // Se já visível e fora da tela, apenas centraliza
    if (estaVisivel && limiteInferiorTela < fundoFormulario - 50) {
        $('html, body').animate({ scrollTop: scrollTo }, 300);
        return;
    }

    // Toggle de visibilidade com animação
    $form.slideToggle(300, function () {
        estaVisivel = $(this).is(':visible');

        if (estaVisivel) {
            $('.CTA').removeClass('CTA').addClass('CTA-active');
            $('.content-form-disabled').removeClass('content-form-disabled').addClass('content-form-enabled');
            $('.closed-content-slide-form').removeClass('closed-content-slide-form').addClass('open-content-slide-form');
            $('.slide-icon-work').removeClass('slide-icon-work').addClass('slide-open-icon-work');
            // adicona foco no input name
            addFocusName();
            // Aguarda o reflow para rolar com altura correta
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const offsetTop = $('#contact-me').offset().top;
                    const sectionHeight = $('#contact-me').outerHeight();
                    const windowHeight = $(window).height() + 60; // adiciona um padding-top de 60 na animação do scroll
                    const scrollTo = offsetTop - ((windowHeight - sectionHeight) / 2);
                    $('html, body').animate({ scrollTop: scrollTo }, 300);
                }, 10);
            });

        } else {
            $('.CTA-active').removeClass('CTA-active').addClass('CTA');
            $('.content-form-enabled').removeClass('content-form-enabled').addClass('content-form-disabled');
            $('.open-content-slide-form').removeClass('open-content-slide-form').addClass('closed-content-slide-form');
            $('.slide-open-icon-work').removeClass('slide-open-icon-work').addClass('slide-icon-work');
        }
    });
});

// Clique no título do formulário
$('#content-slide-title').click(function () {
    $('.closed-content-slide-form, .open-content-slide-form').slideToggle(300, function () {
        estaVisivel = $(this).is(':visible');

        if (estaVisivel) {
            $('.CTA').removeClass('CTA').addClass('CTA-active');
            $('.content-form-disabled').removeClass('content-form-disabled').addClass('content-form-enabled');
            $('.closed-content-slide-form').removeClass('closed-content-slide-form').addClass('open-content-slide-form');
            $('.slide-icon-work').removeClass('slide-icon-work').addClass('slide-open-icon-work');
            // adicona foco no input name
            addFocusName();
            requestAnimationFrame(() => {
                setTimeout(() => {
                    const offsetTop = $('#contact-me').offset().top;
                    const sectionHeight = $('#contact-me').outerHeight();
                    const windowHeight = $(window).height() + 60;
                    const scrollTo = offsetTop - ((windowHeight - sectionHeight) / 2);
                    $('html, body').animate({ scrollTop: scrollTo }, 300);
                }, 10);
                // adicona foco no input name
                addFocusName();
            });

        } else {
            $('.CTA-active').removeClass('CTA-active').addClass('CTA');
            $('.content-form-enabled').removeClass('content-form-enabled').addClass('content-form-disabled');
            $('.open-content-slide-form').removeClass('open-content-slide-form').addClass('closed-content-slide-form');
            $('.slide-open-icon-work').removeClass('slide-open-icon-work').addClass('slide-icon-work');
        }
    });
});

// Animação de destaque no menu conforme a seção visível
$(window).on('scroll', function () {
    const centroVertical = window.scrollY + window.innerHeight / 2;
    $('.menu-start, .menu-tech-stack, .menu-projects, .menu-about-me, .menu-contact-me')
        .removeClass('menu-start-hover menu-tech-stack-hover menu-projects-hover menu-about-me-hover menu-contact-me-hover');

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



