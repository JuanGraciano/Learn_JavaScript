function divisores(num){

  var divisor = [];
  var l = 0;
  for(var i = 0; i < num; i++){

    if(num % i === 0){
      divisor[l] = i;
      l++;
    }

  }
  console.log(divisor);
  return divisor;
}

function numero_perfecto(num){

  var div = divisores(num);
  var cant = div.length;
  var suma = 0;

  for(var  i = 0; i < cant; i++)
    {
      suma += div[i];
    }

  console.log(typeof(suma)+ " "+typeof(num));
  //Convertir un string a numero
  num = Number(num);
  console.log(typeof(suma)+ " "+typeof(num));

  if(suma === num){
    alert(true);
    return 0;
  }
  alert(false);
  return 0;
}

  numero_perfecto( prompt("Digite un numero: "));
