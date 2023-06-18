export type Strategy = () => {
  execute: () => void
}

export const createContext = (strategy: Strategy) => {
  const _strategy = strategy();
  const doSomething = () => {
    _strategy.execute();
  }
  return {
    doSomething: doSomething
  }
}