## Components

#### What Are Components in React?
Components are the building blocks of a React application. A component is a small reusable piece of UI.

#### Types of Components
React mainly has two types:

##### 1. Functional Components (Most Common)
These are simple JavaScript functions that return UI (JSX).
```js
// Example: 
function Welcome() {
  return <h1>Hello React!</h1>;
}
export default Welcome;

// Use it like:
<Welcome />
```

##### 2. Class Components (Older)
React me class component ek ES6 class hoti hai jo React.Component ko extend karke state handle karti hai aur UI ko render() method ke through return karti hai.
```js
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello React Class!</h1>;
  }
}
export default Welcome;
```

##### Component Naming Rule
Component names must start with a capital letter:

- (Pascal-Case): ReadButton ✔ 
- Header ✔ 
- header (React won’t treat it as a component) ❌

##### Difference Table

| Basis              | Functional Component                      | Class Component                                  |
| ------------------ | ----------------------------------------- | ------------------------------------------------ |
| **State Handling** | Hooks use karta hai (useState, useEffect) | `this.state` aur `this.setState()` use karta hai |
| **Code Style**     | Simple, short, aur easy to read           | Lengthy, `this` ki wajah se complex              |
