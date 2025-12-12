## Props

#### What Are Props in React?.
Props is used to pass the data from one component to another. It's just like function arguments.

#### Why Props?
- To send data to components
- To make components reusable
- To customize UI

#### Example 1: Passing Props (Very Simple)
- When you pass the data during calling component then, react automatically wrap in object props and send as first argument to called function. 
- If you write html in between calling component then it's automaticlly provided in props.children property to called function.

#### Example 2: Using Props with Multiple Values

```js
// Child Component

function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}
export default UserCard;

// Parent Component
<UserCard name="Gulshan" age={22} />
<UserCard name="Rahul" age={28} />
```

#### Destructuring Props (Cleaner Way)
Internally , it's destructure method so it's rule is also applied here.
```js
// Instead of 

function User(props) {
  return <h1>Hello {props.name}</h1>;
}

//We write:

function User({ name }) {
  return <h1>Hello {name}</h1>;
}
```
#### Props Are Read-Only
You cannot change props inside the child component.
```js
props.name = "New Name";     // Not allowed`  
const [name, setName] = useState(props.name);     // Allowed 
```