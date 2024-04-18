import React from "react";

type Props = {
  name: string;
  age: number;
};

export const RequiredPropertyComponent = ({ name, age }: Props) => {
  return (
    <div>
      <h3>RequiredPropertyComponent</h3>
      <h4>Requiring name and age to display</h4>
      <div>
        name: {name} and age: {age}
      </div>
    </div>
  );
};

// export default RequiredPropertyComponent;
