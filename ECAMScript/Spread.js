var items =["Tea","Coffee","Milk"];
var itmes1 = ["Biscuit","Lays"];
var toitems = items.concat(itmes1);
console.log(toitems);

var items2 = [...items,...itmes1];
console.log(items2);

var items3=[...items,...'456','TP'];
items3.push("Samiya");
console.log(items3);
