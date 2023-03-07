let container = document.getElementById("container");
let theme = document.getElementById("theme");
let round = document.getElementById("round");
let num = document.getElementById("number");
let trgt = document.getElementById("target_text");
let nvMenu = document.getElementById("nav_menu");
let logo = document.getElementById("logo");
let navToggle = document.getElementById("nav_toggle");
let copyright = document.getElementById("copyright");
let number = document.getElementById("number");
let target = document.getElementById("target");
let getar = document.getElementById("vibration");
let resetBtn = document.getElementById("reset");
let vibrate = false;

getar.addEventListener("click", function () {
  if (vibrate == true) {
    vibrate = false;
    getar.classList.remove("active");
    nvMenu.classList.remove("display_menu");
  } else if (vibrate == false) {
    vibrate = true;
    getar.classList.add("active");
    nvMenu.classList.remove("display_menu");
  }
});

function vibrationMode() {
  if (vibrate == false) {
    window.navigator.vibrate(0);
    console.log("Tidak Getar");
  } else {
    if (count == target.textContent) {
      window.navigator.vibrate([1000, 100, 1000, 100, 1000, 100, 1000]);
    } else {
      window.navigator.vibrate(100);
    }
    console.log("Getar");
  }
}

let desc = document.getElementById("desc");
let count = localStorage.getItem("count");
if (typeof Storage !== "undefined") {

  if (localStorage.getItem("count") === null) {
    localStorage.setItem("count", 0);
  }

  number.innerText = localStorage.getItem("count");

  // Increment
  container.addEventListener("click", () => {
    count++;
    localStorage.setItem("count", count);
    number.innerText = localStorage.getItem("count");
    // console.log(count);

    vibrationMode();
    if (count != 0) {
      desc.innerText = "";
    }
    nvMenu.classList.remove("display_menu");
  });

  resetBtn.addEventListener("click", () => {
    let reset = confirm("Apakah Anda Yakin Akan Me-Restart Kembali?");
    if (reset == true) {
      localStorage.setItem("count",0);
      count = 0;
      number.innerText = count;
      // number.innerText = 0;
      target.textContent = localStorage.setItem("target", "-");
      target.innerText = localStorage.getItem("target");
      desc.innerText = "Klik Dimanapun";
    }
    nvMenu.classList.remove("display_menu");
  });

  let addTarget= document.getElementById("addTarget");
  addTarget.addEventListener('click',() => {
    let trgt = prompt("Masukan Target");
    if (trgt == null) {
        target.textContent = "-";
     } 
    localStorage.setItem("target",trgt);
    console.log(trgt);
    target.innerText = localStorage.getItem("target");

      nvMenu.classList.remove("display_menu");
    });
    target.innerText = localStorage.getItem("target");
}


// Mode Malam
let darkMode = false;

theme.addEventListener("click", function () {
  if (darkMode == false) {
    darkMode = true;
  } else {
    darkMode = false;
  }
  if (darkMode == true) {
    theme.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>Tema Gelap';
    container.classList.add("container_dark");
    round.classList.add("round_dark");
    num.classList.add("color_dark");
    trgt.classList.add("color_dark");
    num.classList.add("color_dark");
    nvMenu.classList.add("nav_menu_dark");
    logo.classList.add("nav_item_dark");
    navToggle.classList.add("nav_item_dark");
    desc.classList.add("nav_item_dark");
    copyright.classList.add("nav_item_dark");

    nvMenu.classList.remove("display_menu");
  } else if (darkMode == false) {
    theme.innerHTML = '<span class="material-symbols-outlined">light_mode</span>Tema Terang';
    container.classList.remove("container_dark");
    round.classList.remove("round_dark");
    num.classList.remove("color_dark");
    trgt.classList.remove("color_dark");
    num.classList.remove("color_dark");
    nvMenu.classList.remove("nav_menu_dark");
    logo.classList.remove("nav_item_dark");
    navToggle.classList.remove("nav_item_dark");
    desc.classList.remove("nav_item_dark");
    copyright.classList.remove("nav_item_dark");

    nvMenu.classList.remove("display_menu");
  }
});

// display Menu
let menu = document.getElementById("nav_toggle");
let navClose = document.getElementById("nav_close");

menu.addEventListener("click", () => {
  nvMenu.classList.add("display_menu");
});

navClose.addEventListener("click", () => {
  nvMenu.classList.remove("display_menu");
});
