$("#js-drawer-icon").on("click", function () {
  $("#js-drawer-icon").toggleClass("is-checked");

  // fadeToggleを先にしないとうまく動かない
  $("#js-drawer").fadeToggle(300);
  $("#js-drawer").toggleClass("is-checked");
});

// Q&A
$(".qa-box__head").on("click", function () {
  $(this).parent().toggleClass("is-open");
  $(this).next().slideToggle();
});

// ケーススタディーのSwiper
const swiper = new Swiper("#js-case-study-swiper", {
  spaceBetween: 18,

  // slidesPerView: "auto",
  slidesPerView: 1.25,

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-case-study-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-case-study-next",
    prevEl: "#js-case-study-prev",
  },

  breakpoints: {
    429: {
      slidesPerView: 3,
    },
  },
});
