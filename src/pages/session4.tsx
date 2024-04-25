const session4 = () => {
  // Function Declaration

  // function greet(nombre: string) {
  //   // nombre.indexOf
  //   // nombre.
  //   console.log("How are you", nombre);
  //   return nombre;
  // }

  // const isLate = false;

  // const sample = () => {
  //   const isNotLate = true;
  //   console.log("nothing", isLate);
  // };

  // console.log(isNotLate)

  // if (isLate) {
  //   const greeting = "Hello"
  // } else {

  // }
  // console.log(greeting)

  // sample();
  // greet("Ana");

  // function greet2() {
  //   console.log(greet("Josue"), "Relogging");
  // }

  // greet();

  // Function Expression

  // const greet2 = function () {console.log("2nd version");};

  // const lastName = "Mata";

  // greet2();
  // ---------------------------------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------------------------------

  // Arrow Function Expression

  // const name = "Josue";

  // (nombre, apellido) => {}

  // const sayName = () => {
  //   const secondName = "Lisbeth";
  //   console.log(name);
  // };

  // const sayName2 = (nombre: string) => nombre;

  // const sayName3 = (nombre: string) => {
  //   return nombre;
  // };

  // console.log(secondName)

  // ---------------------------------------------------------------------------------------------------------

  // Call stack

  // const whatLanguage = () => {
  //   const randomNum = Math.floor(Math.random() * 2) + 1;

  //   if (randomNum > 1) {
  //     return "Konichiwa!";
  //   } else {
  //     return "Hola!";
  //   }
  // };

  // const sayHello = (name: string) => {
  //   console.log(whatLanguage(), "my name is", name);
  // };

  // sayHello("");

  // ---------------------------------------------------------------------------------------------------------

  // Event loop / Queue

  // const delayedFunction = () => {
  //   setTimeout(() => {
  //     console.log("3 seconds later.");
  //   }, 3000);
  //   console.log("Immidiately!");
  // };

  // delayedFunction();

  // ---------------------------------------------------------------------------------------------------------

  // Object.keys();
  // Object.values();

  // const newArr = [1, 2, 3, 4]
  // newArr.length
  // newArr.push
  // newArr.pop
  // newArr.indexOf

  // ---------------------------------------------------------------------------------------------------------

  const arrDeNombres = ["Lucy", "Lucy", "Lucy", "Lucy"];

  const person = {
    name: "Josue",
    age: 31,
  };

  console.log(Object.values(person));

  // arrDeNombres.some((name) => {
  //   if (name === "Lucy") return true;
  // })

  console.log(
    arrDeNombres.every((name) => {
      if (name === "Lucy") return true;
    }),
  );

  // console.log("THIS IS THE INDEX", newArr.indexOf(4));

  // newArr.map(
  //   (name) => {
  //   console.log(name)
  // }
  // );

  // console.log(newArr);

  // const sample = (params) => {}

  // ---------------------------------------------------------------------------------------------------------

  // Control Flow (if, else if, else)

  const onTime = false;

  // if (onTime) {
  //   console.log("On Time!")
  // } else {
  //   console.log("Late")
  // }

  // Log to console
  // console.log(message)

  // const howOdd = (arr: number[]) => {
  //   return 0;
  // };

  // console.assert(howOdd([1, 2, 3, 4, 5]) === 3, "Test case 1 Failed");
  // console.assert(howOdd([1, 3, 5, 7, 9]) === 5, "Test case 2 Failed");
  // console.assert(howOdd([2, 4, 6, 7, 8]) === 1, "Test case 3 Failed");
};

export default session4;
