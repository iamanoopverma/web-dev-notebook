## Asynchronous JS | setTimeout, setInterval, Event loop basics 

#### setTimeout
- If you wanna do any task after some time so you can use this function.
- setTimeout sets minimum delay maximum time depends on event loop.
```js
const id = setInterval(() => {
  console.log("Running...");
}, 1000);
clearInterval(id);     // Clean up of async code
```

#### Event Loop
Actually js is a single threaded language so event loop decides which code will be run first.
1. Sync code → Call Stack
2. Async (setTimeout) → Web APIs
3. Callback Queue
4. Event Loop → Stack empty? then push callback

```js
console.log("start");
setTimeout(() => {
  console.log("timeout");
}, 0);
console.log("end");

//output: 
start
end 
timeout
```

#### Cleanup logic
When a async code can run in future then, you have to write clean up logic for predictable behavior.
