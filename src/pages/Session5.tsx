// props: Props
const Session5 = () => {
  //
  const cosechas = {
    marzo: 4,
    abril: 7,
    mayo: 9,
  };
  //console.log("-----------------------------------------");
  //console.log(" objectproperty-abril", cosechas.abril);
  const loSe = "marzo";
  //console.log(" objectproperty-abril", cosechas[loSe]);

  for (let i = 0; i < 5; i++) {
    const ran = Math.random() * 100;
    const ran2 = Math.floor(ran);
    console.log("ran2", ran2);
  }

  const diasDeSemana = ["lunes", "martes"];
  // diasDeSemana.
  Object.keys(cosechas);
  return <div>Session5</div>;
};

export default Session5;
