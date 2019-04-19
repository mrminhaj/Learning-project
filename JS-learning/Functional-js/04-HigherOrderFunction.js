// Higher order Function 
// To understanding Higher order function 

// var arr = [4, 5, 1, 0, 8];

// arr.forEach(function(ele){
//     console.log(ele);
    
// });


// // same thing 
// function callBackFun(ele){
//     console.log(ele);
    
// }
// arr.forEach(callBackFun);


function caller() {
    return function (name) {
        return 'Coller calling you ' + name;
      }
}

var x = caller();
var y = x('Minhaj Uddin')
console.log(y);


var z = x('Rakibul islam');
console.log(z);



var a = caller()('Another Minhaj Uddin');
console.log(a);


