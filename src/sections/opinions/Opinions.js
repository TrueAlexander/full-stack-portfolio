import Swiper, { Pagination } from 'swiper'
// import Swiper and modules styles
import 'swiper/css'

import 'swiper/css/pagination'

const opinions = () => {
   // configure Swiper to use modules
   Swiper.use(Pagination)

  let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    }
  })
} 

export default opinions