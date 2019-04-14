// Inner Function

// function outer() { 

//     function inner() {  
//         console.log('I am inner Function');
//     }
//     inner();

//     console.log('I am outer function');
    
// }

// outer();



function add(a, b) {
    
    function sum(){
        return a+b;
    }

    function sub(){
        return a-b;
    }

    function times(){
        return a*b;
    }

    function divide(){
        return a/b;
    }

    return sum() + sub() + times() + divide()
}

var result = add(10, 5)
console.log(result);






