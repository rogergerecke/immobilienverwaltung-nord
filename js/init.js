const offset = 80;/* the offset for the end of the fixed nav*/

/* only detect the scroll position to highlight the menu to .active*/
$('body').scrollspy({
    target: '#navbar',
    offset: offset
});


$(document).on('click','.navbar-collapse.show',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});