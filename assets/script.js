let number = document.getElementById('number');
	 const target = document.getElementById('target')
		let count = 0;
  function reset(){
		    count= -1;
		    target.textContent="-";
		}; 
		function increment() {
    count++;
			number.textContent = count; 
    if (count==target.textContent) {
        window.navigator.vibrate(1000);    
    } else{
        window.navigator.vibrate(100);
    };	
		};
		function addTarget(){
		    target.textContent = prompt("Masukan Target");
		    count-=1;
		};
		
		document.addEventListener('keydown', function(event) {
			// Cek apakah tombol yang ditekan adalah angka
			if (event.keyCode >= 48 && event.keyCode <= 57) {
				// Mendapatkan nilai angka dari tombol yang ditekan
				var num = event.keyCode - 48;

				// Mengupdate angka pada layar
				var div = document.getElementById('number');
				var currentNum = parseInt(div.textContent);
				div.textContent = currentNum + num;

				// Membuat efek getar pada perangkat
				window.navigator.vibrate(100);
			}
		});
