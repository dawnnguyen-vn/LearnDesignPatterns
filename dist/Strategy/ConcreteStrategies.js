"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy2 = exports.Strategy1 = void 0;
const Strategy1 = () => {
    const execute = () => {
        console.log('Strategy 1');
    };
    return {
        execute: execute
    };
};
exports.Strategy1 = Strategy1;
const Strategy2 = () => {
    const execute = () => {
        console.log('Strategy 2');
    };
    return {
        execute: execute
    };
};
exports.Strategy2 = Strategy2;
