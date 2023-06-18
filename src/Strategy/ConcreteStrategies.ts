import { Strategy } from "./Context";

export const Strategy1: Strategy = () => {
  
  const execute= () => {
    console.log('Strategy 1');
  }

  return {
    execute: execute
  }
}

export const Strategy2: Strategy = () => {
  
  const execute= () => {
    console.log('Strategy 2');
  }

  return {
    execute: execute
  }
}