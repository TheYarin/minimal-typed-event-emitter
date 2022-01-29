import { EventEmitter } from "events";

export class TypedEventEmitter<C extends Record<string | symbol, any[]>> extends EventEmitter {
  addListener<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  on<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  once<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  removeListener<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  off<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  removeAllListeners<K extends keyof C>(eventName?: K): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners<K extends keyof C>(eventName: K): Function[];
  rawListeners<K extends keyof C>(eventName: K): Function[];
  emit<K extends keyof C>(eventName: K, ...args: C[K]): boolean;
  listenerCount<K extends keyof C>(eventName: K): number;
  prependListener<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  prependOnceListener<K extends keyof C>(eventName: K, listener: (...args: C[K]) => void): this;
  eventNames<K extends keyof C>(): Array<K>;
}
