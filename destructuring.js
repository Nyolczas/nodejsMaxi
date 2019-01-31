const person = {
    name: '8-I',
    age: 44,
    greet() {
        console.log('Helló, a nevem ' + this.name + '.');
    }
};

// a { } közé beadott argumentumot kiveszi az objektum paraméteréből
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);