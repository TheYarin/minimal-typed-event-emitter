import { TypedEventEmitter } from "minimal-typed-event-emitter";

type Events = {
  "event-with-no-parameters": [];
  "event-with-one-parameter": [param1: string];
  "event-with-two-parameters-one-optional": [param1: number, param2?: { inner: string }];
};

const eventEmitter = new TypedEventEmitter<Events>();
// Also works: const eventEmitter = new EventEmitter() as TypedEventEmitter<Events>;

eventEmitter.on("event-with-no-parameters", () => {});
eventEmitter.on("event-with-one-parameter", (a) => {});
eventEmitter.on("event-with-two-parameters-one-optional", (a, b) => {});

eventEmitter.emit("event-with-two-parameters-one-optional", 1);
eventEmitter.emit("event-with-two-parameters-one-optional", 1, 2); // Error: Argument of type 'number' is not assignable to parameter of type '{ inner: string; }'.ts(2345)
