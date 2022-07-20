import React, { useContext, useEffect, useState } from "react";
import { CounterContext } from "../context";
import '../App.css'


export default function CounterApp() {
  const [state, dispatch] = useContext(CounterContext);
 
  

  const incrementCounter = () => dispatch({ type: "INCREMENT" });

  const decrementCounter = () => dispatch({ type: "DECREMENT" });

  const resetCounter = () => dispatch({ type: "RESET" });
  

  return (
    <>
      <h3  className="hedd">Count Value : {state.count}</h3>
      <button  id="plubt"  onClick={incrementCounter}>+</button>
      <button  id='minusbt'onClick={decrementCounter}>-</button>
      <button  id='resebt' onClick={resetCounter}>Reset</button>
      
    </>
  );
}
