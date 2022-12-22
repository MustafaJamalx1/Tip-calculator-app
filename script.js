"use strict";
/////////////
let billValue = Number(document.querySelector(".input-bill").value);
const btns = document.querySelectorAll(".btn-interest");
const btnContainer = document.querySelector(".interests-container");
let peopleNum = Number(document.querySelector(".input-people-num").value);
const tip = document.querySelector(".result-tip");
const total = document.querySelector(".result-total");
let interest = 0;
///////
//////asigning interest
btnContainer.addEventListener("click", function (e) {
  btns.forEach((btn) => btn.classList.remove("btn-active"));
  if (e.target.classList.contains("btn-interest"));
  {
    interest =
      Number(
        e.target.textContent
          .split("")
          .slice(0, e.target.textContent.length - 1)
          .join("")
      ) / 100;
    e.target.classList.add("btn-active");

    btnContainer.style.backgroundColor = "hsl(189, 41%, 97%)";
  }
  if (e.target.classList.contains("input-interest")) {
    interest = Number(e.target.value) / 100;
  }
  calculation();
});
document.querySelector(".input-interest").addEventListener("input", () => {
  interest = Number(document.querySelector(".input-interest").value) / 100;
  calculation();
});
///////////////////////////number of people
document.querySelector(".input-people-num").addEventListener("input", () => {
  peopleNum = Number(document.querySelector(".input-people-num").value);
  calculation();
});
///////////////////////////bill
document.querySelector(".input-bill").addEventListener("input", () => {
  billValue = Number(document.querySelector(".input-bill").value);
  calculation();
});
/////////////calculating and displaying function
const calculation = function () {
  if (billValue > 0 && interest >= 0 && peopleNum > 0) {
    document
      .querySelectorAll(".input-container")
      .forEach((c) => c.classList.add("active-outline"));
    if (interest > 0) {
      const resultAmount =
        Math.round(((billValue + interest * billValue) / peopleNum) * 100) /
        100;
      total.textContent = resultAmount;
      const resultTip =
        Math.round((billValue / peopleNum) * interest * 100) / 100;
      tip.textContent = resultTip;
    } else if (interest === 0) {
      const resultAmount = Math.round((billValue / peopleNum) * 100) / 100;
      total.textContent = resultAmount;

      tip.textContent = 0;
      console.log("im");
    }
  }
};
document.querySelector(".reset-btn").addEventListener("click", () => {
  tip.textContent = "00.00";
  total.textContent = "00.00";
  btns.forEach((btn) => btn.classList.remove("btn-active"));
  document.querySelector(".input-bill").value = "";
  document.querySelector(".input-people-num").value = "";
  interest = 0;
  billValue = 0;
  peopleNum = 0;
  document.querySelector(".input-interest").value = "";
});
