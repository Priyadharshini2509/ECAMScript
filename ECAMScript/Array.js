var num = [2,3,5,6,4];
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);

//Array constructor
var array = new Array(5);
var i;
for(i=0;i<array.length;i++){
    array[i]=i+2;
    console.log(array[i])
}

var arr = new Array(1,2,3,4,5);
var i ;
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//Multidimensional array
var color = new Array("Pink","Violet","Green","Blue");
function dis(color) {
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
    }
    // for(i in color){
    //     console.log(color);
    // }
    // for(j of color){
    //     console.log(color);
    // }
}
dis(color)

//return function
function show() {   
    return new Array("Blue", "Red", "Green", "Yellow")   
 }   
 var colors = show()   
 for(var i in colors) {   
    console.log(colors[i])     
 }  