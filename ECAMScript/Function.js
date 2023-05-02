//function 
function example(){
    x=10;
    console.log(x);
}
example();

//parameterized function

function name(x,y) {
    var c=x+y;
    console.log(x);
    console.log(y);
    console.log(c);
}
name(10,20)

//default parametrized
function num(n,n1=10) {
    console.log(n);
    console.log(n1);
}
num(20);

//return function
function add(a,b) {
    return a+b;
}
var sum = add(50,20);
console.log(sum);

//Anonymous function
var y = function(){
    console.log("Hi");
}
y();

