var map = new Map();
map.set('1',"Priya");
map.set('2',"Tharani");
console.log(map.delete("1"));
console.log(map.size);
console.log(map.values);

var stationary = new Map([['1','Pen'],['2','Pencil']]);
var start = stationary.values();
console.log(start.next());
console.log(start.keys);

var colors = new Map([   
    ['1', 'Red'],   
    ['2', 'Green'],   
    ['3', 'Yellow'],  
    ['4', 'Violet']   
 ]);  
   
 var itr = colors.values();  
 console.log(itr.next());  
 console.log(itr.next());  
 console.log(itr.next());  
 
 var colors = new Map([   
    ['1', 'Red'],   
    ['2', 'Green'],   
    ['3', 'Yellow'],  
    ['4', 'Violet'],
    ['5','Rose']   
 ]);
 console.log(colors);   
 var itr = colors.keys();  
 console.log(itr.next());  
 console.log(itr.next());  
 console.log(itr.next().value);  
 