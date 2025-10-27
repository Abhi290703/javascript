/**
 Destructuring allows extracting values from arrays or objects
  into individual variables easily.

  why :
  makes code cleaner and more readable
  easy to access nested values
 */

  // example 1 : Array destructuring
  const colors = ["green","red","blue","yellow"];
  const [first,second,third,...restof] = colors;
  console.log("first:",first);
  console.log("second:",second);
  console.log("third:",third);
  console.log("restof:",restof);

// example 2 : Object destructuring

const person = {
    emp_name : "Abhi",
    emp_age : 24,
    emp_city : "Pune",
}
const {emp_name:yo , emp_age:yo_age , ...relatedperson} = person
console.log("yo:",yo);
console.log("yo_age:",yo_age);
console.log("relatedperson:",relatedperson);