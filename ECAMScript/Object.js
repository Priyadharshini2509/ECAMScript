var name ='Priya'
var des = 'trainee';

var details ={
    name,des
};
console.log(details.name);
console.log(details.des);

// var department ='dep-name';
var emp ={
    id : 102,
    name : 'priya'
}
console.log(emp);

//Creating an object
let person={
    name: "Priya",
    age : 30,
    des : "Trainee"
};
console.log(person);

//Empty object 
var per = {};
per.name="Tharani";
per.age=24;
per.des = "Tester";
console.log(per);

// using keyword new 
var details = new Object();
details.name="Priya";
details.age=25;
details.des="Trainer";
console.log(details);

//mutable
var details ={
name:"Priya",
age:25,
des:"Trainer"
};
var x = details;
x.age =26;
console.log(details);

// using object constructors
class Person{
    constructor(name,age,){
    this.name = name;
    this.age = age;
    }
}
var emp = new Person("priya",22);
console.log(emp);
var emp1 = new Person("Tharani",24)

var arr =[emp,emp1];
for(obj of arr){
    console.log(obj);
}


