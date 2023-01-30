const minusBtn = document.querySelectorAll(".minus-btn");
const plusBtn = document.querySelectorAll(".plus-btn");
const productNum = document.querySelectorAll(".product-qty");

//商品數量加減
minusBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let itemNum = Number(e.target.nextElementSibling.value);
    if (itemNum > 1) {
      e.target.nextElementSibling.value = itemNum - 1;
    }
  });
});

plusBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let itemNum = Number(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = itemNum + 1;
  });
});

productNum.forEach((item) => {
  item.addEventListener("change", (e) => {
    if (e.target.value < 1) {
      alert("數量不可小於0");
      e.target.value = 1;
    }
  });
});
