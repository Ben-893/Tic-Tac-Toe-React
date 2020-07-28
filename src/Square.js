import React, { useState } from "react";

const Square = ({ num }) => {
  const [value, setValue] = useState(num);

  return (
    <button className="square" onClick={() => setValue("X")}>
      {value}
    </button>
  );
};

export default Square;
