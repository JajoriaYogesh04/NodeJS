// let arr1=[1,2,3]
// arr1.sayHello = ()=>{
//     console.log("Hello!. I am arr1");
// }
// let arr2=[4,5,6];
// arr2.sayHello = ()=>{
//     console.log("Hello!. I am arr2");
// }

// arr1.__proto__.push=(n)=>{console.log("pushing number: ",n)};


// // Factory Fuctions
// function personMaker(name,age){
//     const person={
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, my name is ${name}`);
//         },
//     }
//     return person;
// }
// let p1=personMaker("Yogesh",20);
// let p2=personMaker("Azad",21);
// let p3=personMaker("Aryan",19);


// // Constructors
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.talk= function(){
//     console.log(`Hi, my name is ${this.name}`);
// }
// let p1 = new Person("Yogesh",20);
// let p2 = new Person("Aryan",21);


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("Yogesh",20)
// let p2 = new Person("abc",22);



// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,marks){
//         super(name,age)
//         this.marks=marks;
//     }
// }
// class Teacher extends Person{
//     constructor(name, age, subject){
//         super(name,age);
//         this.subject=subject;
//     }
// }
// let student1= new Student("Yogesh",20,95);
// let teacher1= new Teacher("Dip",40,"DSA");



class Mammal{
    constructor(name){
        this.name=name;
        this.type="warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dogs extends Mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woff...");
    }
    eat(){
        console.log("I am playing");
    }
}
class Cats extends Mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow...");
    }
}
dog1 = new Dogs("Sachin");
cat1 = new Cats("Tandon");