import { useEffect } from "react";

// props: Props
const Session5 = () => {
  //
  // const cosechas = {
  //   marzo: 4,
  //   abril: 7,
  //   mayo: 9,
  //   dummyFunc: (mensajito: () => void) => {

  //     // console.log("dd", mensajito.concat(" ANAAAAAA"))

  //   }
  // };

  // // cosechas.dummyFunc("Firez")
  // //console.log("-----------------------------------------");
  // //console.log(" objectproperty-abril", cosechas.abril);
  // const loSe = "marzo";
  // //console.log(" objectproperty-abril", cosechas[loSe]);

  // for (let i = 0; i < 5; i++) {
  //   const ran = Math.random() * 100;
  //   const ran2 = Math.floor(ran);
  //   // console.log("ran2", ran2);
  // }

  // const diasDeSemana = ["lunes", "martes", "muchos", "muchos", "muchos", "muchos", "muchos", "muchos", "muchos", "Demasiado"];
  // console.log("STRING TO DENOTE WHAT", diasDeSemana[diasDeSemana.length - 1])
  // // diasDeSemana.
  // // ()
  // Object.keys(cosechas)
  // // {}
  // // diasDeSemana.
  // Object.keys(cosechas);

  // // diasDeSemana.
  // // dia
  // console.log(diasDeSemana.length)
  // console.log("cosechas", typeof cosechas);
  // console.log("diasDeSemana", typeof diasDeSemana);

  
  const house = 1;

  const caller = () => {
    setTimeout(() => {
      console.log(house)
      console.log("esperameeeeeee")
    }, 5000)
  }

  caller()

// useEffect(() => {}, [age, name])

  
};

export default Session5;
