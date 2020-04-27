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

$(".portfolio-item").hover(
    function () {
        $(this).removeClass('out').addClass('in');
    },
    function () {
        $(this).removeClass('in').addClass('out');
    }
);

document.querySelectorAll('.experience-details')
    .forEach(el => el.addEventListener('click', function (e) {
        let target = e.target;

        if (!target.classList.contains('experience-details')) {
            target = target.closest('.experience-details');
        };

        if (target.classList.contains('display')) {
            target.classList.remove('display');
            target.classList.add('hide');
        } else {
            target.classList.add('display');
            target.classList.remove('hide');
        }

        const toggleIcon = target.querySelector('.fa-angle-down') ? target.querySelector('.fa-angle-down') : target.querySelector('.fa-angle-up');

        if (toggleIcon.classList.contains('fa-angle-down')) {
            toggleIcon.classList.add('fa-angle-up');
            toggleIcon.classList.remove('fa-angle-down');
        } else {
            toggleIcon.classList.remove('fa-angle-up');
            toggleIcon.classList.add('fa-angle-down');
        }
    }));


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})