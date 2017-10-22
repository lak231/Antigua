

$(document).ready(function () {
    $("#searchIcon").on('click', function () {
        search();
    });
    $("#sidepanel-toggle").on('click', function () {
        toggleSidePanel();
    });
    $("#stjohn-path").on('click', function() {
        window.location.href = "stjohn.html"
    });
});

function toggleSidePanel () {
    if($("#sidepanel").hasClass('active')) {
        $("#sidepanel").removeClass('active');
    } else {
        $("#sidepanel").addClass('active');
    }
}

$('.marker').bind('click', function() {
    $('.card').addClass('active');
    $('.marker').addClass('inactive');
});

$('.card').bind('click', function() {
    $('.card').removeClass('active');
    $('.marker').removeClass('inactive');
});