var a = 1;
var b = 2;
var c = 3;
var d = "3";
var e = false;
var f = true;

var calc1 = a + b ** c - c % 2;
var calc2 = b * (c / a - a);
var calc3 = (c == d) != e;
var calc4 = (b >= a) == f;
var calc5 = (c !== d) && (b % 1 == 0);
var calc6 = e || (b > c || f);

console.log("O resultado de a + b ** c - c % 2 = ", calc1);
console.log(" O resultado de b * (c / a - a) = ", calc2);
console.log("O resultado de (c == d) != e = ", calc3);
console.log("O resultado de (b >= a) == f", calc4);
console.log("O resultado de (c !== d) && (b % 1 == 0) = ", calc5)
console.log("O resuldado de e || (b > c || f) = ", calc6)