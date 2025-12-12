## What is React and SPA?
### React
React ek JavaScript library hai jo UI (User Interface) banane ke liye use hoti hai.  
#### Why React ?
- Component-Based → Your UI is divided into reusable pieces (components).
- Fast Rendering → Uses a Virtual DOM to update the UI efficiently.
- Reusable Code → Build once, use multiple times.
- Strong Community → Huge ecosystem, libraries, tools, support.  
#### What React Does ?
React helps you:
- Show data on the screen (UI)
- Update UI when data changes
- Handle events (click, input, submit)
- Build structured and maintainable apps
###### Notes -  
- Isse ham single page applicationf(SPA) banate hai. Poori website sirf ek hi HTML page me chalti hai.

#### Installation and Setup
##### Method 1: Vite (Recommended)
```js
# Check Node.js version
node -v
npm -v

# Create React project using Vite
npm create vite@latest my-react-app --template react

# Go into folder
cd my-react-app

# Install dependencies
npm install

# Start server
npm run dev
```

##### Method 2: Create React App (CRA)
```js
# Install CRA globally
npm install -g create-react-app

# Create project
create-react-app my-app

# Go into folder
cd my-app

# Start server
npm start
```