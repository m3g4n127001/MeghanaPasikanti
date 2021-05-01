
var speed=150;
var i=0;
var text="I am a computer science undergrad at NITW making this website . ";

function typeWriter() 
{
    if(i<text.length)
    {
        document.getElementById('intro_text').innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}

// const swiper=new Swiper('.swiper-container' , {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     // loop: true,
//     // loopFillGroupWithBlank: false,
//     // Optional parameters
//   init: true,
//   direction: 'horizontal',
// //   loop: true,
//   preloadImages: true,

//   /* THIS PAL RIGHT HERE*/ 
//   slidesPerView: 'auto'
    
// });

var swiper = new Swiper ('.swiper-container', {
//     slidesPerView: 3,
//     slidesPerColumn: 2,
//     // spaceBetween: 30,
//     // speed: 2000,
    // loop: true,
//     // setTimeout(function(){
//     //   mySwiper.update(true);
//     //   mySwiper.slideTo(0, 0)
//     // }, 100);
//     // autoplay: {
//     //   delay: 1000,
//     //   disableOnInteraction: false,
//     // }
}),