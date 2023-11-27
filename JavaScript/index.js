let itemBar = document.querySelector(".item-bar");
let navitemMb = document.querySelector(".navitem-mb");

// itembar --------
let itemBarCount = 0;
itemBar.addEventListener("click", () => {
  itemBar.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  if (itemBarCount == 0) {
    itemBarCount++;
    navitemMb.style.right = "0";
  } else {
    navitemMb.style.right = "-250px";
    itemBar.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
    itemBarCount--;
  }
});

navitemMb.addEventListener("click", () => {
  itemBar.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  if (itemBarCount == 0) {
    itemBarCount++;
    navitemMb.style.right = "0";
  } else {
    navitemMb.style.right = "-250px";
    itemBar.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
    itemBarCount--;
  }
});

// itembar ---------

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

//swiper js
let jobs = document.querySelectorAll(".jobs");
let popUP = document.querySelector(".popUP");
let closePop = document.querySelector(".popClose");
jobs.forEach((item, id) => {
  item.addEventListener("click", () => {
    if (id == 0) {
      popUP.style.left = "50%";
    } else if (id == 1) {
      popUP.style.left = "50%";
    } else if (id == 2) {
      popUP.style.left = "50%";
    } else if (id == 3) {
      popUP.style.left = "50%";
    } else if (id == 4) {
      popUP.style.left = "50%";
    } else if (id == 5) {
      popUP.style.left = "50%";
    }
  });
});
// console.log(jobs);

closePop.addEventListener("click", () => {
  popUP.style.left = "-500px";
  console.log("hello");
});
