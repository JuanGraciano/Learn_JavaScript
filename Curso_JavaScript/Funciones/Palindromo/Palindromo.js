function palindromo(palabra)
{
  var aux =  palabra.split("").reverse().join("");
  console.log(aux);
  if(aux === palabra){
    alert ("YES es palindromo");
    return true;
  }
  alert ("NO es palindromo");
  return false;
}

  console.log(palindromo( prompt("Digite una palabra: ") ));
