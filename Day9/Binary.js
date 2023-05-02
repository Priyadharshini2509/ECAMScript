var n = 9;
var r = 0,n1 = n;
while(n1>0){
    r<<=1;
    if((n1&1)==1){
        r = r^1;
        n1 = n1 >>1;
    }
    
}
if(n ==r){
    console.log("Binary Palindrome");
}
else{
    console.log("Not a Binary Palindrome");
}