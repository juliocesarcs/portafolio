//O(f(n))


let numero = 2
    var cota = Math.floor(numero / 2); 
    var candidato = 2; var primo = true; 
    while (primo && candidato <= cota){ 
        if (numero % candidato == 0){ 
            primo = false; 
        } 
            candidato = candidato + 1; 
    } 

console.log(primo)