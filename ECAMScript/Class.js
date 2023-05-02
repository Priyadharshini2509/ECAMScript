//class Expression
var Stu = class{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
var details = new Stu('Tharani',23);
console.log(details);

//initailzing
class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
var per = new Student("priya",20);
console.log(per);

//class using function
class Employee{
    constructor(name,age,des){
        this.name = name;
        this.age = age;
        this.des = des;
    }
    details(){
        return this.name+" "+this.age+" "+this.des;
    }
}
var emp =  new Employee("Priya",22,"Trainee");
console.log(emp.details());

//static keyword
class Sample{
    static show(){
        console.log("Static Keyword");
    }

}
Sample.show();
