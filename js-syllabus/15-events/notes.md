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