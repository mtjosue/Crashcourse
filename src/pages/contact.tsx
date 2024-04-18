import React from "react";

type Props = {
  rounds: 10;
};
const name = true;

// condtion to evaluate ? if true execute this : otherwise execute this.
const contact = ({ rounds }: Props) => {
  return (
    <div
      style={{
        display: "inline",
      }}
    >
      {!name ? <div>Yes its Josue</div> : <div>No It is not Josue</div>}
      <div>Hello</div>
      <h1>JOsue</h1>
      <h2></h2>
      <span className="flex border font-bold italic">CARS</span>
      <footer></footer>
    </div>
  );
};

export default contact;
