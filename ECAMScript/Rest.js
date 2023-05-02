function sum(...args){
     let s=0;
     for(let i of args){
        s = s+i;
     }
     console.log(s);
}
sum(100,20);

var fooditems =["Briyani","Maggi","Tea","Coffe","Milk","Biscuit"];

//destruction in rest paramaters
var[a,b,c,...args]=fooditems;
console.log(a);
console.log(b);
console.log(c);
console.log(args);

//dynamic function
let abc = new Function('...args','return args');
console.log(abc(100,200));