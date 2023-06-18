"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContext = void 0;
const createContext = (strategy) => {
    const _strategy = strategy();
    const doSomething = () => {
        _strategy.execute();
    };
    return {
        doSomething: doSomething
    };
};
exports.createContext = createContext;
