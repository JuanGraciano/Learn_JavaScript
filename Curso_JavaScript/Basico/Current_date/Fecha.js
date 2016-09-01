
  var date = new Date();

  var dia = date.getDate();
  var mes = date.getMonth();
  var anio = date.getFullYear();

  var listDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  var listMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  if(dia < 10)
    dia = '0' + dia;

  console.log(dia + "/" + listMes[mes] + "/" + anio);
