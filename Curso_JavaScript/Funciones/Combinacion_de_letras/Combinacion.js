
function silabas(palabra){

  var cant = palabra.length;

  palabra = palabra.split("");
  var combinacion = [];

  var l = 0;

  for(var i = 0; i < cant; i++){
    combinacion[l] = palabra[i];
    for(var j = i+1; j < cant; j++){
      l++;
      combinacion[l] = combinacion[l-1] + palabra[j];
    }
    l++;
  }

  console.log(combinacion);

  alert("Las combinaciones son: " + combinacion);

}

  silabas( prompt("Digite una palabra: ") );
