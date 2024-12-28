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
