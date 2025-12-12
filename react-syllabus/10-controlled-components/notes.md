## Controlled Components
Jab koi from ka input value react state ke through set ya upadate ho to use controlled component khte hai.

#### Form Example

```js
// For Input Field:                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value) } />

// For Checkbox Field:          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />

// For Dropdown Field:           <select value={city} onChange={(e) => setCity(e.target.value)}>
                                                  <option value="Delhi">Delhi</option>
                                                  <option value="Mumbai">Mumbai</option>
                                                  <option value="Kolkata">Kolkata</option>
                                              </select>
```
```js
// For Whole Form:                   const [form, setForm] = useState({ email: "", password: "" });
                                                const handleInput = (e) => {
                                                                  setForm({
                                                                      ...form,
                                                                      [e.target.name] : [e.target.value]
                                                                  })  
                                                  } 

                                             <form>
                                                <input type="text" name="email" value={form.email} onChange={handleInput} />
                                                <input type="password" name="password" value={form.password} onChange={handleInput} />
                                            </form>

```

#### Controlled Component Use Kyun Karte Hain?
- Form validation easy hota hai
- UI behavior React ke logic ke under aata hai
- Single Source of Truth (state)
- Dynamic behaviors possible hote hain
- Debugging easy hoti hai
