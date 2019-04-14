/*
>>>>>>> First Class Function <<<<<<<<
*/

// simple function

function sayName(name){
    return 'Hello '+name;
}

// 1. A Function can be stored in a Variable
// var hello = sayName; // its for use reference call 
// var fun = sayName('Minhaj Uddin'); // its function

// console.log(hello);
// console.log(fun);

// var result = hello('Minhaj Uddin');
// console.log(result);




// 2. A Function can be stored in an Array
// var arr = [1,2,3];
// arr.push(sayName('Minahj'))
// console.log(arr);



// 3. A Function can be stored as an Object Field or property 

// var person = {
//     name: 'Minhaj Uddin',
//     sayName: sayName,
//     print: function(name){
//         console.log('Hi ' + name);
//     }
// }
// console.log(person);




// 4. We can create function as needed 

// var sum = 10 + (function(){return 50}());
// console.log(sum);




// 5. we can pass function as an argument

// function wow(name, fun){
//     return fun(name);
// }
// var result = wow('Minhaj Uddin', sayName);
// console.log(result);





// 6. We can return function from another function 
function base(b){
    return function(n) {
        var result = 1;

        for (var i = 0; i<b; i++){
            result *= n;
        }
        return result;
    }
}

// var power = base(2);
// var result = power(10);
// console.log(result);



var result = base(3)(5);
result