// Done with the main task? Here's some ideas for things to continue with:

// - Read about [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
//and make a copy of 5-objects.html called 5-classes.html
//and try to convert all of the tasks in there to use a Person and Dog class.
// - Build upon the Person class; write a function in the
//Person class which prints the name and age of the person when invoked.
//-----------------------------------------------------------------------------------
// Objects allow you to store data and functions. Unlike arrays,
// they are not ordered, and so do not use indexes at all for
// retrieving or modifying their values. Instead they use keys and values
// to store pointers to data.
//
// Have a read through the documentation here before you begin: https://www.w3schools.com/js/js_objects.asp
// The documentation mentions methods, which is where you assign a
// function to a key in the object. We'll be focusing entirely on the more simple
// version it mentioned; properties.

// Task 1: Below is a variable called person which has an object assigned to it.
// The object has one property with the key (studentAt) which has a string "Chas" as its
// value. Add two more properties (keys and values) to the object; one called name which
// should store your name as a string, and one called age which should store
// your age as a number.
const person = {
  studentAt: "Chas",
};

console.log(person);

// Task 2: Add a fourth property to the object using the key `favoriteFoods`. Its value
// should be an array of strings with some foods you like.

// Task 3: Use the dot notation to print the name and age properties from the person
// object using console.log.

// Task 4: You can add a property to an object using the dot notation and using assignment to
// set a its value. Do this to add a new property to the person object with the key `eyeColor`
// and value being a string with the color of your eyes.

// Task 5: Objects can be nested within other objects. To fetch a value, you must chain
// the dot notation. For example, you could select the entire `adult` object from the
// `dog` object below using the notation `dog.labrador.adult`. Using the dog object below,
// use console.log() to print the name of the puppy (so it should print "Buster").
/*const dogs = {
  labrador: {
    adult: {
      name: "Marley",
    },
    puppy: {
      name: "Buster",
    },
  },
};
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  user() {
    return this.name + " " + this.age;
  }
}

const userJohanna = new Person("Johanna", 36);
const userEmelie = new Person("Emelie", 31);
userEmelie.food = ["tomat"];

console.log(userJohanna.user() + userEmelie.user());

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  dogs() {
    return this.name + " " + this.age;
  }
}

const myDog = new Dog("fido", "adult");
console.log(myDog.dogs());
