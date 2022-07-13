
console.log("js rodando");

var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");

var semNada = document.getElementById('sem-nada');

input1.addEventListener("keyup", esconderMsg);



function esconderMsg () {
	if (input1.value > '0') {
		semNada.style.visibility='hidden' 
		input2.style.visibility='visible'
	} else {
		semNada.style.visibility='visible'
		input2.style.visibility='hidden'
	}


}

