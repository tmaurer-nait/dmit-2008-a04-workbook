import { useState } from "react";

const ButtonClicker = (props) => {
  let [count, setCount] = useState(0);

  const clickHandler = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <button onClick={clickHandler}>Click me!</button>
      <p>The count is {count} </p>
      {count > 5 ? <>Count is greater than 5</> : <>Count is less than 5</>}
    </div>
  );
};

export default ButtonClicker;
