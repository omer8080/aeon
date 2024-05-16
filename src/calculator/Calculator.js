import { memo, useState } from "react";

const Calculator = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [total, setTotal] = useState("");

  const onAdd = () => {
    const sum = parseFloat(firstNum) + parseFloat(secondNum);
    setTotal(sum);
  };
  return (
    <>
      <div className="text-center">
        <h2>Adding Two Numbers</h2>
        <input
          type="number"
          name="firstNum"
          placeholder="First Number"
          value={firstNum}
          onChange={(e) => setFirstNum(e.target.value)}
        />
        <br />
        <input
          type="number"
          name="secondNum"
          placeholder="Second Number"
          value={secondNum}
          onChange={(e) => setSecondNum(e.target.value)}
        />
        <br />
        <button type="button" onClick={onAdd}>
          Add Two Numbers
        </button>
        <p>Total: {total}</p>
      </div>
    </>
  );
};

export default memo(Calculator);
