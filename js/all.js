function scrollShow(scrollID, addBtnID, removeBtnID) {
  const show = document.querySelector(scrollID);

  const addBtn = document.querySelector(addBtnID);
  const removeBtn = document.querySelector(removeBtnID);
  console.log(addBtn);
  console.log(removeBtn);
  show.classList.toggle("show");

  addBtn.classList.toggle("Answer-close");
  removeBtn.classList.toggle("Answer-show");
}

// 導覽列
const menuBar = document.querySelector(".menuBar");
const SPshow = document.querySelector(".SPshow");
menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("menuBar-active");
  SPshow.classList.toggle("SPshow--active");
});
const listLink = document.querySelectorAll(".listLink");
listLink.forEach(item=>{
  item.addEventListener("click",()=>{
    menuBar.classList.toggle("menuBar-active");
    SPshow.classList.toggle("SPshow--active");
  })
})
// 臉部動畫
const jsAn = document.querySelectorAll(".js-An");
console.log(jsAn);
let num_A = 0;
let num_B = 0;
let interval_A, interval_B;
function aStart() {
  clearInterval(interval_A);
  num_A = 0;
  interval_A = setInterval(() => {
    if (num_A < jsAn.length) {
      jsAn.forEach((item, ind) => {
        if (num_A === ind) {
          setTimeout(() => {
            item.classList.add("An-show");
            item.classList.remove("An-close");
          }, 250);
        }
      });
      num_A++;
    } else {
      clearInterval(interval_A);

      setTimeout(() => {
      
        num_A = 0;
        bStart();
      }, 2000);
    }
  }, 250);
}

function bStart() {
  clearInterval(interval_B);
  num_B = 0;
  interval_B = setInterval(() => {
    if (num_B < jsAn.length) {
      jsAn.forEach((item, ind) => {
        if (num_B === ind) {
          setTimeout(() => {
            item.classList.remove("An-show");
            item.classList.add("An-close");
          }, 250);
        }
      });
      num_B++;
    } else {
      clearInterval(interval_B);
      setTimeout(() => {
        num_B = 0;
        aStart();
      }, 2000);
    }
  }, 250);
}
aStart();
