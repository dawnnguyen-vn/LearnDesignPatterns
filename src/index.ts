import { createContext } from "./Strategy/Context"
import { Strategy1 } from "./Strategy/ConcreteStrategies"
import { Strategy2 } from "./Strategy/ConcreteStrategies"

const context1 = createContext(Strategy1);
const context2 = createContext(Strategy2);

context1.doSomething();
context2.doSomething();