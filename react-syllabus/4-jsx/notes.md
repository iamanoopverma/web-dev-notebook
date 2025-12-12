## JSX (JavaScript XML)
You can write html in js with the help of jsx syntax.
### JSX Working
React.createElement() converts JSX in JS object. because browser don't understand JSX. 
### JSX ke Basic Rules
- JSX must return one parent element.
    ```js
       // Invalid
       return (
       <h1>Hello</h1>
       <p>World</p>
       );
       // Valid
       return (
        <div>
        <h1>Hello</h1>
        <p>World</p>
        </div>
        );
    ```
  ```js
     const name = "Anoop";
     return <h1>Hello {name}</h1>;  
  ```
- In JSX all attribute be in camelcase.

| HTML Attribute | JSX Attributes         |
|:-------------- |:-----------------------|
| class          | className              |
| for            | htmlFor                |
| onclick        | onClick (camelCase)    |
```js
   // Wrong
   <div class="box">Hello</div>
   // Right
   <div className="box">Hello</div>
```
### Self-Closing Tags
- JSX don't supports empty tag, you have to close it. because this is rule of XML.
```js
   <img src="pic.jpg" />
```
### Ternary Opertor is Allowed
```js
function Welcome(props) {
  const isLoggedIn = props.loggedIn;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome back, Anoop!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}
```
### JSX Fragment: <></>
- React offers empty fragment for making parent element. 

```js
   return (
   <>
    <h1>Hello</h1>
    <p>World</p>
   </>
   );

```

### JSX in Variable
You can store html in a variable, because react converts jsx in js object. so internally stores object of your given html.
```js
//You can write like this 
const title = <h1>Hello</h1>;

//Internal Working
const title = React.createElement("h1", null, "Hello");

// React.createElement("h1", null, "Hello");  returns
{
  type: "h1",
  props: {
    children: "Hello"
  }
}
```
