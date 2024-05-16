import "./App.css";
import ArraySumIndex from "./array-sum-index/ArraySumIndex";
import Calculator from "./calculator/Calculator";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Calculator />
      <hr />
      <ArraySumIndex />
    </>
  );
};

export default App;
