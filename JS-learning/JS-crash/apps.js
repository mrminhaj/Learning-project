// var name = 'Minhaj Uddin';
// var age = 19;
// var skills = ['java', 'javaScript', 'React']

// console.log(name);


//>>>====Data Type :===<<<<<
// Number, String, Boolean, undefined, null, 
// Array, Object, Function

// //number 
// var age = 20;
// //String
// var name = 'Mohammad Minhaj Uddin';
// //Boolean
// var result = false;
// //Undefined
// var something;
// //Null
// var anything = null;
// //



// //Statement
// var age = 18;
// if(age >= 18){
//     console.log('Yes, I am eligible');
// }else{
//     console.log('No'); 
// }



// //Loop
// var name = 'Minhaj Uddin';
// for (var i=0; i<10; i++){
//     console.log('Hello, ' + name);
// }




// //Array
// var names = [];
// names[0] = 'Minhaj';
// names[1] = 'Mehedi';
// names[2] = 'Marwa';
// names[3] = 'Mahin';

// // console.log(names);

// for (var i = 0; i<names.length; i++) {

//     console.log('Hello, ' + names[i].toUpperCase());
// };


// var names = ['Minhaj', 'Muslim', 'Marwa'];
// var data = [1,2,3,4,5];
 
// //Printing index
// console.log(names[1]);
// console.log(names[names.length - 1]);

// // Searching data in Array

// console.log(names.indexOf('Minhaj'));

// // add data last index
// names.push('Mr. X');
// // Removing last index 
// names.pop()

// // add dat first index
// names.unshift('This is first Index')
// // removing first index
// names.shift()
// console.log(names);


// Function

//Function Declaration 
// function add(a, b){
//     return a+b;
// }
// console.log(add(10, 12));

// //Function Expression
// var add =function(a, b){
//     return a+b;
// }
// var addition = add;

// console.log(add(50, 40));
// console.log(addition(10, 100));



//Callback Function 

// var names = ['Minhaj', 'Muslim', 'Marwa'];


// names.forEach(function(name, index){
//     num = index + 1
//     console.log(num + '. '+ name);
// })

// function operation(a, b){
//     var c = a + b;
//     var d = a - b;

//     print(c, d);
    
// }
// function print(c, d){
//     console.log(c,d);
    
// }
// operation(10, 5)



// function operation(a, b, Callback){
//     var c = a + b;
//     var d = a - b;

//     Callback(c, d);
    
// }
// function print(c, d){
//     console.log(c, d);
// }
// function multiply (c, d){
//     console.log(c*d);
// }
// operation(10, 5, print);
// operation(10, 5, multiply)




// Object


// var person = {};
// person.name = 'Minhaj Uddin';
// person.age = '19 Year';
// person.print = function () {
//     console.log(this.name + ' ' + this.age);    
// }
// person.print()

// var person = {
//     name: 'Minhaj Uddin',
//     age: 19,
//     skill: ['javaScript', 'React'],
//     print: function(){
//         console.log(this.name, this.age, this.skill);
         
//     }
// }

// person.print();




var people = [
    {
        name: 'Minhaj Uddin',
        age: 20
    },
    {
        name: 'Another Name',
        age: 2
    }
]
people.forEach(function(person){
    console.log(person.name);
    
})
 