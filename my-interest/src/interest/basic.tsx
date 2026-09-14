import { useState } from "react";
import InterstCalculator from "./interest-calculator";

export default function Interest() {
  let amount: number = 15;
  let year: number = 5;

  const [curAmount, setAmount] = useState(0);
  const [curYear, setYear] = useState(0);

  function changeYear(event: React.ChangeEvent<HTMLInputElement>) {
    setYear(() => Number(event.target.value));
  }

  function changeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(() => Number(event.target.value));
  }

  function log(message: string): void {
    console.log(message);
  }

  return (
    <>
      <h1 style={{ textDecoration: "underline" }}>Interest Calcualtor </h1>
      <input type="number" max={5} placeholder="year" onChange={changeYear} />
      <input type="number" placeholder="amount" onChange={changeAmount} />
      <InterstCalculator amount={curAmount} year={curYear} invoke={log} />
    </>
  );
}
