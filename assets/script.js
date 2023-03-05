let number = document.getElementById("number");
let target = document.getElementById("target");
let getar = document.getElementById("vibration");
let count = 0,vibrate = false;;
function reset() {
  number.innerText = 0;
  count = 0;
  target.textContent = "-";
}

getar.addEventListener("click", function () {
  if (vibrate == true) {
    vibrate = false;
} else if (vibrate == false) {
	vibrate = true;
}
});
// function vibrationMode() {
function vibrationMode(){
	if(vibrate==false){
		window.navigator.vibrate(0);
		console.log("Tidak Getar");
	}else{
		if (count == target.textContent) {
			window.navigator.vibrate([1000,100,1000,100,1000,100,1000]);
		} else {
			window.navigator.vibrate(100);
		}
		console.log("Getar");
	}
}
// }

function increment() {
  count++;
  number.textContent = count;
  vibrationMode();
}
function addTarget() {
  target.textContent = prompt("Masukan Target");
  count -= 1;
}

document.addEventListener("keydown", function (event) {
  // Cek apakah tombol yang ditekan adalah angka
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    // Mendapatkan nilai angka dari tombol yang ditekan
    var num = event.keyCode - 48;

    // Mengupdate angka pada layar
    var div = document.getElementById("number");
    var currentNum = parseInt(div.textContent);
    div.textContent = currentNum + num;

    // Membuat efek getar pada perangkat
    window.navigator.vibrate(100);
  }
});
