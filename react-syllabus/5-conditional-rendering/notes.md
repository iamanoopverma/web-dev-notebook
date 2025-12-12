## Conditional Rendering

#### What is Conditional Rendering in React?
Show something in the UI only when a condition is true.
React don't render null, undefined, boolean, NaN, empty string.

##### 1. Using if Statement (Basic)
```js
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome User</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}
```

##### 2. Using Ternary Operator (Most Common)
```js
function App() {
  const isDarkMode = false;
  let status = "loading";

  return (
    <div>
      {isDarkMode ? <h1>Dark Mode</h1> : <h1>Light Mode</h1>}
      <p>{status === "loading" ?
            "Loading....": status === "error" ?
          "Error Occured":"Success"}</p>        // You can use nested Ternary.
    </div>
  );
}
```

##### 3. Using AND Operator (&&) — Show Only if True
```js
const isAdmin = true;

return (
  <div>
    {isAdmin && <button>Delete User</button>}
  </div>
);
```

##### 4. Function based Conditional Rendering

```js
function App() {
    function getUi(onlineStatus){
      if (onlineStatus === "online") return <p>User is online.</p>;
      else if (onlineStatus === "offline") return <p>User is offline.</p>;
      else return <p>User is away.</p>;
    }
    return(
        <>
           {getUi("offline")}
        </>
    );
}
```