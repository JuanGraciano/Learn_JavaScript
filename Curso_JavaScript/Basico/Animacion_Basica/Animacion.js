function animacion(id)
{
    var cadena = document.getElementById(id);
    var nodo = cadena.childNodes[0];
    var texto = nodo.data;
    console.log(cadena);
    console.log(nodo);
    console.log(texto);

setInterval(
  function () {
  texto = texto[texto.length - 1] + texto.substring(0, texto.length - 1);
  nodo.data = texto;
  },
  300);
}
