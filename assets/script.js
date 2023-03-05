let number = document.getElementById("number");
let target = document.getElementById("target");
let getar = document.getElementById("vibration");
let count = 0,
  vibrate = false;
function reset() {
  let reset = confirm("Apakah Anda Yakin Akan Me-Restart Kembali?");
  if (reset == true) {
    number.innerText = 0;
    count = 0;
    target.textContent = "-";
  }
}

getar.addEventListener("click", function () {
  if (vibrate == true) {
    vibrate = false;
    getar.classList.remove("active");
  } else if (vibrate == false) {
    vibrate = true;
    getar.classList.add("active");
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

function increment() {
  count++;
  number.textContent = count;
  vibrationMode();
}
function addTarget() {
  target.textContent = prompt("Masukan Target");
  //   count -= 1;
}

// Mode Malam
let container = document.getElementById("container");
let theme = document.getElementById("theme");
let round = document.getElementById("round");
let num = document.getElementById("number");
let trgt = document.getElementById("target_text");
let nvMenu = document.getElementById("nav_menu");
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
  } else if (darkMode == false) {
    theme.innerHTML = '<span class="material-symbols-outlined">light_mode</span>Tema Terang';
    container.classList.remove("container_dark");
    round.classList.remove("round_dark");
    num.classList.remove("color_dark");
    trgt.classList.remove("color_dark");
    num.classList.remove("color_dark");
    nvMenu.classList.remove("nav_menu_dark");
  }
});
