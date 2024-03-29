/* 
  13 |_4____
  13 - 4 = 9            1
  9  - 4 = 5            1
  5  - 4 = 1            1 
  1  - 4 = -3           //La división entera de 13 entre 14 es 3, porque fueron el total de divisiones que se pudieron hacer sin llegar a ser negativo
*/

let resultado = 0
const divisionEntera = (dividendo, divisor) => {
  if (dividendo < divisor){
    return 0
  }
  return 1 + divisionEntera(dividendo - divisor, divisor)
}

console.log(divisionEntera(13,4))