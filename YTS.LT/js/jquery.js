$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.collapse').toggle("slow");
    });

    $('#register-link').click(function () {
        $('.login-form').css('display', 'none');
    })

    $('.login-tab').click(function () {
        $('.login-tab').addClass('active');
        $('.register-tab').removeClass('active');
        $('.login-form').addClass('active');
        $('.login-form').show();
        $('.register-form').hide();
    });

    $('.register-tab').click(function () {
        $('.register-tab').addClass('active');
        $('.login-tab').removeClass('active');
        $('.register-form').addClass('active');
        $('.login-form').hide();
        $('.register-form').show();
    });

    $('#quick-search-input').blur(function () {
        $('#quick-search-input').val('');
        $('#search-results').html('');
    });

    $('#quick-search-input').focus(function () {
        let coorX = $('#quick-search-input').position().left;
        $('#search-results-holder').css('left', coorX + 'px');
    });

    $('#register-username').blur(function () {
        if (/^([a-zA-Z0-9_-]){4,12}$/.test($('#register-username').val())) {
            $('.usernameConfirmation').show();
            $('.usernameAlert').hide();
        } else {
            $('.usernameConfirmation').hide();
            $('.usernameAlert').show();
        }
    })

    $('#register-email').blur(function () {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#register-email').val())) {
            console.log("Sve ok");
            $('.confirmed').show();
            $('.alert').hide();
            $('.emptyEmailAlert').hide();
        }
        else if ($('#register-email').val() == '') {
            $('.emptyEmailAlert').show();
            $('.confirmed').hide();
            $('.alert').hide();
        }
        else {
            $('.alert').show();
            $('.confirmed').hide();
            $('.emptyEmailAlert').hide();
            console.log('Ne valja');
        }
    });

    $('#register-password').blur(function () {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test($('#register-password').val())) {
            $('.passwordAlert').hide();
            if ($('#register-password').val().length <= 7) {
                $('.weak').show();
                $('.medium').hide();
                $('.strong').hide();
            } else if ($('#register-password').val().length <= 9) {
                $('.weak').hide();
                $('.medium').show();
                $('.strong').hide();
            } else if ($('#register-password').val().length > 9) {
                $('.weak').hide();
                $('.medium').hide();
                $('.strong').show();
            }
            console.log('sve ok');
        }
        else {
            $('.passwordAlert').show();
            console.log('nije ok');
        }
    });

    $('#confirm-password').blur(function () {
        if ($('#confirm-password').val() == $('#register-password').val()) {
            $('.confirmationPassword').show();
            $('.confirmationAlert').hide();
        } else {
            $('.confirmationPassword').hide();
            $('.confirmationAlert').show();
        }
    });

    $('.toTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
});