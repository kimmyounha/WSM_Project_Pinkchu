const imgHearts = document.querySelectorAll(".img_heart");
imgHearts.forEach(function (imgHeart) {
  imgHeart.addEventListener("click", function () {
    this.classList.toggle("active");  // active 클래스를 토글하여 테두리를 추가 또는 제거
  });
});