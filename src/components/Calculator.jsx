import React from "react";
import { wrapper, orange, gray, result } from "./Calculator.module.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { useState } from "react";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e) {
    let inputValue = e.target.value;
    num === 0 ? setNum(inputValue) : setNum(num + inputValue);
  }

  function clear() {
    setNum(0);
  }

  function percentage() {
    setNum(num / 100);
  }

  function changeSymbol() {
    num > 0 ? setNum(-num) : setNum(Math.abs(num));
  }

  function operatorHadler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    switch (operator) {
      case "/":
        setNum(parserFloat(oldNum) / parseFloat(num));
        break;
      case "X":
        setNum(parserFloat(oldNum) * parseFloat(num));
        break;
      case "-":
        setNum(parserFloat(oldNum) - parseFloat(num));
        break;
      case "+":
        setNum(parseFloat(oldNum) + parseFloat(num));
        break;
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className={wrapper}>
          <Box m={10} />
          <h1 className={result}>{num}</h1>
          <button onClick={clear}>Ac</button>
          <button onClick={changeSymbol}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className={orange} onClick={operatorHadler} value="/">
            /
          </button>

          <button className={gray} onClick={inputNum} value={7}>
            7
          </button>
          <button className={gray} onClick={inputNum} value={8}>
            8
          </button>
          <button className={gray} onClick={inputNum} value={9}>
            9
          </button>
          <button className={orange} onClick={operatorHadler} value="X">
            X
          </button>

          <button className={gray} onClick={inputNum} value={4}>
            4
          </button>
          <button className={gray} onClick={inputNum} value={5}>
            5
          </button>
          <button className={gray} onClick={inputNum} value={6}>
            6
          </button>
          <button className={orange} onClick={operatorHadler} value="-">
            -
          </button>

          <button className={gray} onClick={inputNum} value={1}>
            1
          </button>
          <button className={gray} onClick={inputNum} value={2}>
            2
          </button>
          <button className={gray} onClick={inputNum} value={3}>
            3
          </button>
          <button className={orange} onClick={operatorHadler} value="+">
            +
          </button>

          <button className={gray} onClick={inputNum} value={0}>
            0
          </button>
          <button className={gray} onClick={inputNum} value=".">
            ,
          </button>
          <button className={gray} style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className={orange} onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
