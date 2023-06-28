const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true, 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // bulletClass: 'swiper-pagination__bullet',
      // bulletActiveClass: 'swiper-pagination__bullet--active'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });