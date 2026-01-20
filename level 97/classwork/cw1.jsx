import { useState } from "react";

export default function Calculator() {
  const [sum, setSum] = useState(0);

  const hadleSubmit = (e) => {
    e.preventDefault
    const number1 = e.target.elements.value;
    const number2 = e.target.element.value;

    setSum(Number(num1) + Number(num2));
  };

  return(
    <CalculatorView
    sum={sum}
    onSubmet={handleSubmet}
    />
  )
}