//加入我的最愛
const heart = document.querySelectorAll(".heart");
heart.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("fa-regular");
    item.classList.toggle("fa-solid");
  });
});
