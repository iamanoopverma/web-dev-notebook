## Hooks
- Jo special features pehle sirf class components me milte the (jaise state, lifecycle methods), unhe ham functional components me bhi use kar paye isliye hi Hooks banaye gaye.

#### useState
Is hook ki wajah se ham variable ki value change hone par dom ko re-render kara skte hai.
```js
Syntax =>  const [value, setValue] = useState(initialValue);
Example => const [name, setName] = useState("Anoop Verma");
```

##### Important Facts

- If you wanna update nested object state, then you have to use prev argument with callback. which represents current element of state.
- If you mutate the state, its reference will not change and it it doesn't, the re-render will not happen. 
```js
// Question - Update pincode without mutating state with spread operator
const [user, setUser]= useState([{
    name: "Anoop Verma",
    age: 25,
    address: {
        city: "Akbar Pur",
        pincode: 224146
    }
    Profession: unknown
}])

// Answer
setUser(prev => ({
  ...prev,
  address: {
    ...prev.address,
    pincode: 560001
  }
}));
```

###### What happens when component re-render on state-chnage?
When any state update comes during running a component:
  - react note all state changes(react work)
  - After execution of last line of component 
  - React re-render component.
  - React don't assign value on every re-render.  
   