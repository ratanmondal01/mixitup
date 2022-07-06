$(document).ready(function(){
    // init Isotope
    var $grid = $('.item').isotope({
    // options
    });
    // filter items on button click
    $('.item-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.item-menu').on( 'click', 'li', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
