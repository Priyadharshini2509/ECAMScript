var a = 10;
var b= 20;

//Arthimetic operator
var d= a+b;
console.log(d);
var d = a-b;
console.log(d);
var d= a*b;
console.log(d);
var d=a/b;
console.log(d);
var d=a%b;
console.log(d);
var d=++a;
console.log(d);
var d=a++;
console.log(d);
var d=--b;
console.log(d);
var d=b--;
console.log(d);

//Relational operator
var d=a>b;
console.log(d);
var d = a<b;
console.log(d);
var d=a<=b;
console.log(d);
var d = a>=b;
console.log(d);
var d = a==b;    
console.log(d);
var d = a!=b;
console.log(d);

//Logical operator
var d=((a<30)&&(b<40));
console.log(d);
var d=((a==10)||(b>20));
console.log(d);
var d =!((a>=10)||(b==20));
console.log(d);

//Assignment operator
var x = 20;   
var y = 40;     
x = y;  
console.log(x);   
x += y;   
console.log("x+=y: " + x);   
x -= y;   
console.log("x-=y: " + x);   
x *= y;   
console.log("x*=y: " + x);   
x /= y;   
console.log("x/=y: " + x);   
x %= y;   
console.log("x%=y: " + x);

//Bitwise Operators
var x=20;
var y=30;
var z=0;
z=x&y;
console.log(z);
z=x/y;
console.log(z);
z=x^y;
console.log(z);
z=~x;
console.log(z);
z=x<<2;
console.log(z);
z=x>>2;
console.log(z);

//Miscellaneous
 var x= 10;
 var y= x;
 var y=-x;
 console.log(y);

 //Type operators
 var a=20;
 console.log(typeof(a));