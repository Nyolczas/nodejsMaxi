var name = 'Isti';
var age = 44;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
    let boolConversion;
    if(userHasHobby){
        boolConversion='van';
    }
    else{
        boolConversion='nincs';
    }
    return (
        'A nevem ' + userName + ', ' + userAge + ' éves vagyok és ' + boolConversion + ' hobbim.'
    );
} 

console.log(summarizeUser(name, age, hasHobbies));