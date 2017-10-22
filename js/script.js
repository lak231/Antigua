

$(document).ready(function () {
    $("#searchIcon").on('click', function () {
        search();
    });
    $("#sidepanel-toggle").on('click', function () {
        toggleSidePanel();
    });
    $("#test-path").on('click', function() {
        console.log("eyyy");
        window.location.href = "stgeorge.html"
    });
});

function toggleSidePanel () {
    if($("#sidepanel").hasClass('active')) {
        $("#sidepanel").removeClass('active');
    } else {
        $("#sidepanel").addClass('active');
    }
}