## Promises | async & await

## Promise
A Promise is an object that handles a future result.
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
- Single catch can handle all errors.

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
## async & await
- **async** - It makes function promise returning.
- **await** - It stops the function till resolving the promise.

```js
   async function getData(){
    try{
      const res = await fetch(url);
      if(res.ok){
        throw new Error("API Failed");
      }
      const data = await res.json();
      console.log(data); 
    }
    catch(err){
      console.log(err);
    }
   }
```

**Note**:
- You can use "await" only in function which is declared with "async" keyword.
- await === then