import { useState } from "react";

// Components
import Header from "./components/Header/Header";
import CalculatorForm from "./components/CalculatorForm/CalculatorForm";
import Results from "./components/Results/Results";

function App() {
  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investmentParameters.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInvestmentParameters((prevInvestmentParameters) => {
      return {
        ...prevInvestmentParameters,
        [inputIdentifier]: +newValue, // Convert string to number
      };
    });
  }

  return (
    <>
      <Header title="React Investment Calculator" />;
      <CalculatorForm
        investmentParameters={investmentParameters}
        onChange={handleChange}
      />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero</p>
      )}
      {inputIsValid && <Results investmentParameters={investmentParameters} />}
    </>
  );
}

export default App;
