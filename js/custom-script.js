$(".masthead .masthead-avatar").hover(
    function () {
        $(this).removeClass('out').addClass('in');
    },
    function () {
        $(this).removeClass('in').addClass('out');
    }
);

$(".dev-icons .list-inline-item").hover(
    function () {
        $(this).removeClass('out').addClass('in');
    },
    function () {
        $(this).removeClass('in').addClass('out');
    }
);

$(".experience-details").click(
    function () {
        if ($(this).hasClass('display')) {
            $(this).removeClass('display').addClass('hide');
        } else {
            $(this).removeClass('hide').addClass('display');
        }
    }
);