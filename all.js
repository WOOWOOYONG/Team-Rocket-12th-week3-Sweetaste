//jquery
$(document).ready(function () {
  $(".headerpage").load("header.html");
});
$(document).ready(function () {
  $(".footerpage").load("footer.html");
});

const heart = document.querySelectorAll(".heart");
const heartSolid = document.querySelectorAll(".fa-heart");
console.log(heart);
heart.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("fa-regular");
    item.classList.toggle("fa-solid");
  });
});

heartSolid.addEventListener("click", () => {
  heartSolid.classList.remove("add-to-favorite");
});

//receipt page
//發票方式切換
const eInvoiceBtn = document.querySelector(".e-invoice");
const sendInvoiceBtn = document.querySelector(".send-invoice");
const mailInput = document.querySelector(".receipt-mail");
const addressInput = document.querySelector(".receipt-address");

eInvoiceBtn.addEventListener("click", (e) => {
  e.target.classList.add("selected");
  sendInvoiceBtn.classList.remove("selected");
  if (!mailInput.classList.contains("show")) {
    mailInput.classList.add("show");
    addressInput.classList.remove("show");
  }
});

sendInvoiceBtn.addEventListener("click", (e) => {
  e.target.classList.add("selected");
  eInvoiceBtn.classList.remove("selected");

  if (!addressInput.classList.contains("show")) {
    addressInput.classList.add("show");
    mailInput.classList.remove("show");
  }
});
