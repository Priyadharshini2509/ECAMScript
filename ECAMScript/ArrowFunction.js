//function
function f1(){
    console.log("Function");
}

//Anonymous function
var f2 = function () {
    console.log("Anonymous function");
}

//arrow function
var f3 = () =>{
    console.log("Arrow function");
}
f1();
f2();
f3();

//synatic varation
var xyz = x =>{
    console.log("synatic");
}
xyz();

//Arrow function with parameters
var num = (a,b,c) =>{
    console.log(a);
    console.log(b);
    console.log(c);
}
num(1,2,3)

//arrow with defalut parameters
//default parametrized
function number(n,n1=10) {
    console.log(n);
    console.log(n1);
}
number(20);


//arrow function with rest parameters
var myfun = (a, ...args) =>{
    console.log(a);
    console.log(args);
}
myfun(1,2,3,4,5);
