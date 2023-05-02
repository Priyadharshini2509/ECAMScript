var arrayemp =[
    {"id":1,"name":"priya"},
    {"id":2,"name":"dharshini"},
    {"id":3,"name":"Gokul"},
    {"id":4,"name":"Kavin"},
    {"id":5,"name":"Kavipriya"},
    {"id":1,"name":"Kaviya"},
    {"id":7,"name":"priya"},
    {"id":8,"name":"Muthumahesh"},
    {"id":9,"name":"Dinesh"},
    {"id":1,"name":"priyadharshini"}
]
for(var i = 0 ; i<arrayemp.length;i++){
    console.log(arrayemp[i]);
}
for(var j = 0 ; j<arrayemp.length;j++){
    for(var k = j+1;k<arrayemp.length;k++){
        if(arrayemp[j].name>arrayemp[k].name){
            var temp = arrayemp[j];
            arrayemp[j] = arrayemp[k];
            arrayemp[k] = temp;
        }
    }
}
/*for(var l = 0;l<arrayemp.length;l++){
    console.log(arrayemp[l]);
}*/
console.log(arrayemp);
