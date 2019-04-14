// Return Statement 



function name(firstName, lastName, gender){
    if (gender ==='male'){
        var output = 'Mr. ' + firstName + ' '+ lastName;
        return output;

    } else if (gender === 'female'){
        var output = 'Ms. ' + firstName + ' '+ lastName;
        return output;
    }
}

var fullName = name('Minhaj', 'Uddin', 'male');
console.log(fullName);



function example () {
    return {
        name: 'Minhaj Uddin',
        skill: ['HTML5', 'CSS3', 'JavaScript', 'java', 'JQuery', 'Etc'],
        print: function(){
            console.log(this.name, this.skill);  
        }
    }
}

var obj = example();
obj.print()