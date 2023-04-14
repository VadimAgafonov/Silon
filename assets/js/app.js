// $(function () {
    
//     /* Fixed Header */
//     var navBar = $("#nav__container"),
//         banner02 = $("#banner02").innerHeight(),
//         scrollOffset = $(window).scrollTop();

//     checkScroll(scrollOffset);
    
//     $(window).on("scroll", function() {
        
//     scrollOffset = $(this).scrollTop();
//     checkScroll(scrollOffset);
//     });
//        function checkScroll(scrollOffset) {

//         if( scrollOffset >= banner02 ) {
//             navBar.addClass("fixed")
//         } else {
//             navBar.removeClass("fixed")
//         }
//     }
    
//     /* Smooth Scroll */

//     $("[data-scroll]").on("click", function(event){
//         event.preventDefault();

//         var $this = $(this),
//             blockId = $this.data('scroll');
//             blockOffset = $(blockId).offset().top;

//     $("html, body").animate ({
//         scrollTop: blockOffset -80
//     }, 500);

//     });


// });

const button = document.querySelector('#about')
const button2 = document.querySelector('#service')
const popular = document.querySelector('#projects')
const product = document.querySelector('#product')

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'   
    })
}

button.addEventListener('click', () => {
    scrollTo(popular)
})

button2.addEventListener('click', () => {
    scrollTo(product)
})
