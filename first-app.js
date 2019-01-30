const name = 'Isti';
let age = 44;
let hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobby) {
//     let boolConversion;

//     if (userHasHobby) {
//         boolConversion = 'van';
//     } else {
//         boolConversion = 'nincs';
//     }

//     return (
//         'A nevem ' + userName + ', ' + userAge + ' éves vagyok és ' + boolConversion + ' hobbim.'
//     );
// }

const summarizeUser = (userName, userAge, userHasHobby) => {
    let boolConversion;

    if (userHasHobby) {
        boolConversion = 'van';
    } else {
        boolConversion = 'nincs';
    }

    return (
        'A nevem ' + userName + ', ' + userAge + ' éves vagyok és ' + boolConversion + ' hobbim.'
    );
};

// egyszerű arrow function:
const add = (a, b) => a + b;

console.log(add(5, 3));

console.log(summarizeUser(name, age, hasHobbies));