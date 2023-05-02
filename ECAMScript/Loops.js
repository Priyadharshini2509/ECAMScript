var i;
for(i=0;i<10;i++){
    console.log(i);
}
// for(;;){
//     console.log("Hi");
// }

//for in loop
function Mobile(model){  
    this.Model = model;  
    this.Color = 'Black';  
    this.RAM = '6GB';  
    }  
    var Samsung = new Mobile("Galaxy");  
    for(var p in Samsung)  
    {  
    console.log(p+ " : " +Samsung[p]);  
    } 

    //for of
var items =["Tea","Coffee","Milk"];
for(let value of items){
    console.log(value);
}

//While
var i=0;
while(i<=10){
    // i++;
    console.log(i);
    i++;
}

//do while
var i=1;
do{
    i=i*10;
}while(i<5)
console.log(i);

//break
var n=1;
while(n<=7){
    console.log(n);
    if(n==4){
        break;
    }
    n++;
}

//continue
var n=0;
while(n<=7){
    n++;
    if(n==4){
        continue;
    }
    console.log(n);
}

// labelname with break
var x, y;  
  
loop1:         //The first for statement is labeled as "loop1."  
  
for (x = 1; x < 4; x++) {   
     loop2:    //The second for statement is labelled as "loop2"  
   for (y = 1; y < 4; y++) {    
      if (x === 2 && y === 2) {  
         break loop1;  
      }  
      console.log('x = ' + x + ', y = ' + y);  
   }  
}  

