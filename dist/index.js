"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Context_1 = require("./Strategy/Context");
const ConcreteStrategies_1 = require("./Strategy/ConcreteStrategies");
const ConcreteStrategies_2 = require("./Strategy/ConcreteStrategies");
const context1 = (0, Context_1.createContext)(ConcreteStrategies_1.Strategy1);
const context2 = (0, Context_1.createContext)(ConcreteStrategies_2.Strategy2);
context1.doSomething();
context2.doSomething();
