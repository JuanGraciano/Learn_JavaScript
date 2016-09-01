
var num = window.prompt("Digite un año: ");

if(num !== null)
  if((num % 100 !== 0 || num % 400 === 0) && num % 4 ===0)
    alert("Exito! " + num + " es un año bisiesto");
  else
    alert("fracaso! " + num + " no es un año bisiesto");
else
  alert("Digite un numero");
