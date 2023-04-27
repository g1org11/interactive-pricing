let price = document.querySelector(".value");
let checkbox = document.querySelector("#switch");
let check = document.querySelector(".check");
let progress = document.querySelector(".progress");
let slide = document.querySelector("#slide");
let views = document.querySelector(".main-header");
let time = document.querySelector(".month");
check.addEventListener("click", function () {
  check.classList.toggle("active");
  checkIt();
});

//this function changes values of slider depending toggle is active or not.
let checkIt = (slide.oninput = function () {
  if (slide.value == 1 && check.className == "check active") {
    progress.style.width = 0 + "%";
    views.innerHTML = 10 + "K PAGEVIEWS";
    price.innerHTML = (8 - 8 * 0.25) * (12).toFixed(2);
    time.innerHTML = "/year";
  } else if (slide.value == 1) {
    progress.style.width = 0 + "%";
    views.innerHTML = 10 + "K PAGEVIEWS";
    price.innerHTML = (8).toFixed(2);
    time.innerHTML = "/month";
  } else if (slide.value == 2 && check.className == "check active") {
    progress.style.width = 25 + "%";
    views.innerHTML = 50 + "K PAGEVIEWS";
    price.innerHTML = (12 - 12 * 0.25) * (12).toFixed(2);
    time.innerHTML = "/year";
  } else if (slide.value == 2) {
    progress.style.width = 25 + "%";
    views.innerHTML = 50 + "K PAGEVIEWS";
    price.innerHTML = (12).toFixed(2);
    time.innerHTML = "/month";
  } else if (slide.value == 3 && check.className == "check active") {
    progress.style.width = 50 + "%";
    views.innerHTML = 100 + "K PAGEVIEWS";
    price.innerHTML = (16 - 16 * 0.25) * (12).toFixed(2);
    time.innerHTML = "/year";
  } else if (slide.value == 3) {
    progress.style.width = 50 + "%";
    views.innerHTML = 100 + "K PAGEVIEWS";
    price.innerHTML = (16).toFixed(2);
    time.innerHTML = "/month";
  } else if (slide.value == 4 && check.className == "check active") {
    progress.style.width = 75 + "%";
    views.innerHTML = 500 + "K PAGEVIEWS";
    price.innerHTML = (24 - 24 * 0.25) * (12).toFixed(2);
    time.innerHTML = "/year";
  } else if (slide.value == 4) {
    progress.style.width = 75 + "%";
    views.innerHTML = 500 + "k PAGEVIEWS";
    price.innerHTML = (24).toFixed(2);
    time.innerHTML = "/month";
  } else if (slide.value == 5 && check.className == "check active") {
    progress.style.width = 100 + "%";
    views.innerHTML = 1 + "M PAGEVIEWS";
    price.innerHTML = (32 - 32 * 0.25) * (12).toFixed(2);
    time.innerHTML = "/year";
  } else if (slide.value == 5) {
    price.innerHTML = (32).toFixed(2);
    progress.style.width = 100 + "%";
    views.innerHTML = 1 + "M PAGEVIEWS";
    time.innerHTML = "/month";
  }
});
