import { TypedEventEmitter } from "minimal-typed-event-emitter";

type Events = {
  "event-with-no-parameters": [];
  "event-with-one-parameter": [param1: string];
  "event-with-two-parameters-one-optional": [param1: number, param2?: { inner: string }];
};

class MyEventEmitter extends TypedEventEmitter<Events> {
  // ...
}

const myEventEmitter = new MyEventEmitter();

myEventEmitter.on("event-with-no-parameters", () => {});
myEventEmitter.on("event-with-one-parameter", (a) => {});
myEventEmitter.on("event-with-two-parameters-one-optional", (a, b) => {});

myEventEmitter.emit("event-with-two-parameters-one-optional", 1);
myEventEmitter.emit("event-with-two-parameters-one-optional", 1, 2); // Error: Argument of type 'number' is not assignable to parameter of type '{ inner: string; }'.ts(2345)
