//sumatoria... viernes 23 de agosto

let total = 0
let x = 1

for (var i=0; i<10; i++){
    total+=(Math.pow(x,i))/factorial(i)

    console.log(total)
}

function factorial (n) {
	var total = 1; 
	for (i=1; i<n; i++) {
		total = total * i; 
	}
    return total;
}

console.log("Resultado de la sumatoria es " + total)

