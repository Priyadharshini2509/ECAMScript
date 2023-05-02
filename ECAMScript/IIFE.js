//normal function
function fun(){
    // for(i=0;i<5;i++){
    //     console.log(i);
    // }
    console.log("HI");
}
fun();

//iife
(function(){
    console.log("Javascript");
})();

//parameterized 
(function(a,b,c){
    console.log(c);
    console.log(a+" "+b);
})(10,20,30);

(function(){console.log("ECAMScript");})();