var num = "1001";
var d = 0,b = 1;
var len = num.length;
for(var i = len - 1 ;i>=0;i--){
    if(num[i] == '1'){
        d = d + b;
        b = b*2;
    }
}
console.log(num);