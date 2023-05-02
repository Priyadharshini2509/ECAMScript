function name() {
    for(i=0;i<5;i++){
        console.log(i);
    }
}
name()
//generator
function *gen(){
    for(i=0;i<=5;i++){
        yield i;
    }
}
var generator = gen();
console.log(generator.next().value);    //0
// console.log(generator.next().value);    //1
// console.log(generator.next().value);    //2
// console.log(generator.next().value);    //3
// console.log(generator.next().value);    //4
// console.log(generator.next().value);    //5
console.log(generator.next());          //undefine and also return type also printed


function *generatorfn(){
    var j=0;
    while(true){
        j++;
        yield j;
    }
}
function display(obj){
    for(i=0;i<10;i++){
        console.log(obj.next().value);
    }
}
var f1 = generatorfn();
display(f1); //j10
display(f1); //j20
var f2 = generatorfn();
display(f2);
display(f1);