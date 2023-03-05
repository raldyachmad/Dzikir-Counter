let number = document.getElementById("number");
let target = document.getElementById("target");
let getar = document.getElementById("vibration");
let count = 0,
  vibrate = false;
function reset() {
  number.innerText = 0;
  count = 0;
  target.textContent = "-";
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
