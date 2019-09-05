//O(f(n))

let x = 20
let y = 60
let resto=0; 

    while ( (x % y) !== 0 ){ 
        resto = x % y; 
        x = y; 
        y = resto; } 


console.log(y)