## Basic CSS in React
React me css add krne ke liye 4 tareeke hote hai.

#### 1. Normal CSS File(Most Common & Easiest) 
```js
// Button.css file

.btn{
    background-color: purple;
    color:white;
}

// Button.jsx file

funtion Button(){
    return <button className="btl">Login</button>;
}
export default Button;
```

##### 2. Inline CSS (Quick)
Inline css lagane ke liye hame css js object me wrap krke dena pdta hai.

```js
const styleObj = {
    color: "white",
    backgrondColor: "purple";
    cursor: "pointer"
}

function App(){
    return (
        <>
            <button style={styleObj}>Login</button>
            <button style={ {color: "white", backgroundColor: "purple"} }>Sign-up</button>
        </>
    )
}
export default App;
```
##### 3. CSS Modules (Clean & Modern)
- Ye file ham module.css extension se banate hai.
- Isme banaye gaye classnames conflict nahi hote, kyunki module.css inhe ek object me wrap karke har classname ko unique bana deta hai.
- Best for medium - large projects.

```js
// Button.module.css

.btn{
    background-color: purple;
    color:white;
    cursor: pointer;
}

// Button.jsx file
import styles from './Button.module.css';

function Button(){
    return <button className={styles.btn}>Login</button>  
}
export default Button;
```

##### 4. Styled Components
- Ye library css ko js me likhne ki facility provide krti hai. Ise css-in-js kahte hai.
- Ye library react me phle se installed nhi hoti aapko install krna pdta hai.
```js
// ReadButton.jsx file

import styled from "styled-components";

const btn = styled.button`
    background: orange;
    color: white;   
`;

function ReadButton(){
    return <btn>Login</btn>;
}
export default ReadButton;
```