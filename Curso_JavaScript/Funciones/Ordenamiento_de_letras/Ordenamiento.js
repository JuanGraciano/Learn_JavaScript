function ordenar(palabra){

  var nueva = palabra.split("");

  nueva.sort();
  nueva = nueva.join("");

  console.log(nueva);
  alert("Texto original: " + palabra + "\n Ordenamiento: " + nueva);
}

  ordenar( prompt("Digite una palabra: "));
