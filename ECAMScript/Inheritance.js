//Parent class-Example
class Example{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Example1 extends Example{
    details(){
        console.log(this.name+" "+this.age);
    }
}
var obj = new Example1("Priyadharshini",22);
obj.details()

class Example2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class Example3 extends Example2{
    details(){
        super.details();
        console.log(this.name+" "+this.age);
    }
}
var obj = new Example1("Tharani",22);
obj.details()