const person = {
    name: '8-I',
    age: 44,
    greet() {
        console.log('Helló, a nevem ' + this.name + '.');
    }
};

person.greet();