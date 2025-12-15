## Promises | resolve, reject, chaining 

## Promise
Promise is a object that represents work which is going to happen in future.
```js
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});
```
- resolve = Success Value.
- reject = Error.

#### How to consume Promise?
```js
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```
- then = It's handle resolve.
- catch = It's handle reject.

#### Promise Chaining
- You can handle multiple async steps.
- Every then returns a value or new promise.
```js
new Promise(resolve => {
  resolve(2);
})
.then(num => num * 2)
.then(num => num * 3)
.then(final => console.log(final)); // 12
```

#### Error Handling in Chaining
Whenever error comes in chaining then nearest catch handle it.
```js
new Promise((resolve, reject) => {
  reject("Error occurred");
})
.then(res => console.log(res))
.catch(err => console.log(err)); // Error occurred
```