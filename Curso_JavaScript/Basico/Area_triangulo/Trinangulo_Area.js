
var a = 5;
var b = 6;
var c = 7;

var lados = a+b+c;
var per = lados / 2;

var area = (per-a)*(per-b)*(per-c)*per;
area = Math.sqrt(area);

console.log(area);
