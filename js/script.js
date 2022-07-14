
$(function () {
    $("#navbarToggle").focusout(function (event) {
        var screenwidth = window.innerWidth;
        if (screenwidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});
