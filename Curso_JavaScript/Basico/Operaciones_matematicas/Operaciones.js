function multiplicacion()
{
        num1 = document.getElementById("primero").value;
        num2 = document.getElementById("segundo").value;
        console.log(num1*num2);
        document.getElementById("resultado").innerHTML = num1 * num2;
}

function division()
{
        num1 = document.getElementById("primero").value;
        num2 = document.getElementById("segundo").value;
        console.log(num1/num2);
        document.getElementById("resultado").innerHTML = num1 / num2;
}
