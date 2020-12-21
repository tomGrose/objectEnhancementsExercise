//1
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

const createInstructor = (firstName, lastName) => {
    return {firstName, lastName};
}


// 2
const favoriteNumber = 42;

const instructor ={
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};


//3
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

const instructor2 = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return `${this.firstName} says bye!`;
    }
}


//4
const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb](){
            return noise;
        }
    }
}