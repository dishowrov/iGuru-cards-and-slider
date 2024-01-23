$(function () {
    var owl = $(".dis-carousel");
    owl.owlCarousel({
        items: 5,
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            "<i aria-hidden='true' class='fas fa-chevron-left'></i>",
            "<i aria-hidden='true' class='fas fa-chevron-right'></i>",
        ],
        responsive: {
            1024: {
                items: 4
            },
            768: {
                items: 3,
            },
            375: {
                items: 2,
            },
        }
    });
}); 