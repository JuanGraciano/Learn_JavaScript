
for(var anio = 2014; anio <= 2050; anio++)
{
  var date = new Date(anio, 0, 1);
  if(date.getDay() === 0)
    console.log(anio+ " comienza un Domingo");
}
