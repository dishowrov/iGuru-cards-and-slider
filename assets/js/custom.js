// $(function () {
//     var owl = $("#dis-cat-slider");
//     owl.owlCarousel({
//         items: 5,
//         margin: 10,
//         loop: true,
//         // dots: false,
//         // nav: true,
//         // navText: [
//         //     "<i aria-hidden='true' class='fas fa-chevron-left'></i>",
//         //     "<i aria-hidden='true' class='fas fa-chevron-right'></i>",
//         // ],
//         responsive: {
//             0: {
//                 items: 1
//               },
          
//               600: {
//                 items: 3
//               },
          
//               1024: {
//                 items: 4
//               },
          
//               1366: {
//                 items: 5
//               }
//         }
//     });
// }); 

$(function () {
    var owl = $("#dis-cat-slider");
    owl.owlCarousel({
        autoplay: true,
        rewind: true,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
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
