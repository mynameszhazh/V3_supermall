import { reactive, provide, inject } from 'vue';

// 这里的意思好像就是只是做了一个state属性用来操作一些东西
export const stateSymbol = Symbol('state');
export const createState = () => reactive({ counter: 0 });

export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
  stateSymbol,
  createState()
);
