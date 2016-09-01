function Revertir(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}
  console.log(Revertir( prompt("Digite un numero: ") ));
