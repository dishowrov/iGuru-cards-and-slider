$(function () {
    var owl = $(".dis-cat-slider");
    owl.owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        nav: true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',

            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsive: {
            0: {
                items: 1
            },

            600: {
                items: 3
            },

            1024: {
                items: 4
            },

            1366: {
                items: 5
            }
        }
    });
});

