## Events
When browser or user perform an action it's called event.

#### Types of Events-
- click
- key press
- scroll
- page load


#### Important Facts About Event
- Every event has a object which have event details.

#### Event Bubbling Problem
- When parent and child both have an event then it's problem arise. when you click child then both event handler function run(child, parent).
- If you don't wanna run parent's handler function on clicking child, so you have to use stopPropagation function in child handler function.

```JS
<div id="parent">
    <div id="child"></div>
</div>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked");
});
```

#### Event Debouncing Problem
Sometime, No matter how much time fire the event. we want that handler function run at the last event. 

```js
<input type="text">

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const search = debounce(() => {
  console.log("API Call");
}, 500);

input.addEventListener("keyup", search);
```

#### Event Throttling Problem
Sometime, No matter how much time fire the event. we want that handler function run once in decided time.

```js
function throttle(fn, limit) {
  let flag = true;

  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
const onScroll = throttle(() => {
  console.log("Scroll handler");
}, 1000);

window.addEventListener("scroll", onScroll);
```

#### Event Delegation
If we wanna run an event function on many element, then we attach event function on parent element.
Even you will add dynamic element it runs on that element also.

```js
const container = document.getElementById("container");

// For a particular class element 
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    console.log("Button clicked:", e.target.innerText);
  }
});

// For dynamic element
container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert(e.target.innerText);
  }
});
const newBtn = document.createElement("button");
newBtn.innerText = "New Button";
container.appendChild(newBtn);
```