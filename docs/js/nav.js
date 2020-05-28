$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('#top_nav').addClass('active');
        } else {
            $('#top_nav').removeClass('active');
        }
    });
    $('#top_nav a[href]').on('click', function(event) {
    $('.navToggle').trigger('click');
});
});







/*$(function() {
    var offset = $('#navicon').offset();
    var scrollpos;
    $(window).scroll(function () {
        if ($(window).scrollTop() > offset.top) {
            $('#navicon').addClass('fixed');
        } else {
            $('#navicon').removeClass('fixed');
        }
    });
    $('#top_nav a[href]').on('click', function(event) {
            $('.nav_slide_button').trigger('click');
      });
});*/




/*$(function() {
        $('.navicon').click(function() {
            $(this).toggleClass('active');
            if ($(this).hasClass('active')) {
                $('#globalMenu').addClass('active');
            } else {
                $('#globalMenu').removeClass('active');
            }
        });
    });

$('#top_nav a[href]').on('click', function(event) {
            $('#nav-toggle').trigger('click');
    });
*/
