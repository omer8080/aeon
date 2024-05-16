import { memo } from "react";

const ArraySumIndex = () => {
  const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
          return [i + 1, j + 1];
        }
      }
    }
  };

  console.log(twoSum([4, 11, 17, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));
  console.log(twoSum([2, 7, 11, 15], 9));
  console.log(twoSum([2, 3, 4], 6));

  return (
    <>
      <div className="text-center">
        <h2>Task 3: Array Sum Index</h2>
        <p>Please follow below steps to see the results</p>
        <p>Right Click -&gt; Click on "Inspect" -&gt; Click on "Console"</p>
        <p>OR</p>
        <p>Refresh the page</p>
      </div>
    </>
  );
};

export default memo(ArraySumIndex);
