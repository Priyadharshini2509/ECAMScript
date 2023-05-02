// "use strict";
// function ex(){
//       x=89;
//       console.log(x);
// }
// ex();

y=88;   // It will not cause an error.  
sam();
function sam(){
    "use strict";
     x=89;  // It will cause an error
}
console.log(y);

// variables use with scope or
 //cannot change