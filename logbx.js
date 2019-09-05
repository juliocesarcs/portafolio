x = prompt("ingresa la base")

for (var j=1; j<11; j++){
    r = Math.log2(j)/Math.log2(x)
    console.log("log en base " + x + " de " + j + " = " + r)
}