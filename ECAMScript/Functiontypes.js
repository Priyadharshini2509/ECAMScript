function num() {
    console.log("Normal Function");
}
num()

var fun =function (){
    console.log("Anonymous function");
}
fun()

var fun1 = function fun2(){
    console.log("Function Expression");
}
fun1()
//fun2() //error will occur fun2 not defined

var f3 = () =>{
    console.log("Arrow Function");
}
f3()