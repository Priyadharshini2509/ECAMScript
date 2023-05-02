var str = "Thank You for coming";
console.log(str);

var str1 = new String("Hi How are you ?");
console.log(str1.constructor);
console.log(str1.length);

// var str2 = new String("Priya");
// str2.prototype.age(20);
// console.log(str2);

var str2 = "Hello How are you?"
console.log(str2.startsWith("Hello",0));    //console.log(str2.startsWith("hello",0)); //false
console.log(str2.endsWith("?",19));         //console.log(str2.endsWith("you",15)); //false
 