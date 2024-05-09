import React, { useState } from "react";

const Session6 = () => {
  // setTimeout()

  const a = 1;
  const b = a.toString();
  console.log(typeof b);
  // => "1"
  parseInt(b);
  // => 1

  const nestedObject = {
    favoriteShows: [
      "Game of Thrones",
      "The Boys",
      "Sex and the City",
      "The Witcher",
    ],
    favoriteActivities: [
      {
        season: "Summer",
        sport: "Volley Ball",
      },
      {
        season: "Winter",
        sport: "Snowboard",
      },
    ],
  };

  const c = "3.145674";
  parseFloat(c);

  const nestedArray = [
    {
      brand: "Toyota",
      models: ["Camry", "Highlander", "Corolla"],
    },
    {
      brand: "Honda",
      models: ["Civic", "Accord", "Corolla"],
    },
  ];

  const [score, setScore] = useState();

  const test = {
    first: "airplane",
    second: "bus",
    third: "car",
    fourth: "door",
    fifth: "escape",
  };

  //Destructuring
  //   const fifth = test.fifth;
  const { fifth } = test;

  //Renaming & Default Values
  const { fifth: newVar = true } = test;

  //Value of a Arrow Function Expression?
  const testFunc = () => {
    return;
  };

  return <div>Session6</div>;
};

export default Session6;
