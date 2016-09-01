
var fecha = new Date();
var suma = 0;
var mes = fecha.getMonth();
while(mes<=11)
{
  if(mes<=6)
   {
       if(mes%2 === 0)
         suma+=31;
       else
         suma+=30;
   }
  else
  {
    if(mes%2 !== 0)
         suma+=31;
    else
      suma+=30;
  }
    mes++;
}

suma-= fecha.getDate()+6;
console.log(suma);
