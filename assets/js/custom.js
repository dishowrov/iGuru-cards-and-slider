$(function () {
    var owl = $(".dis-cat-slider");
    owl.owlCarousel({
        items: 5,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
            "<i aria-hidden='true' class='fas fa-chevron-left'></i>",
            
            "<i aria-hidden='true' class='fas fa-chevron-right'></i>",
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

