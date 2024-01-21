import PersonBuilder from './UserBuilder';

const ahmad = new PersonBuilder('ahmad').makeManager().makePartTime(32).withMoney(100).build();
const loe = new PersonBuilder('loe').makeManager().build();
const keven = new PersonBuilder('keven').makeManager().withMoney(100).build();

console.log('managers', {
    ahmad: ahmad.toString(),
    loe: loe.toString(),
    keven: keven.toString(),
});

const john = new PersonBuilder('john').makeEmployee().makePartTime(87).withList(['addUser']).build();
const fared = new PersonBuilder('fared').makeEmployee().withList(['addUsers', 'updateUsers']).build();

console.log('employee', {
    john: john.toString(),
    fared: fared.toString(),
});

