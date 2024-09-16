### What is React?
**React** is a JavaScript library used for building user interfaces, particularly dynamic and interactive web applications. It was developed by Facebook to make it easier to build components that manage their own state and update efficiently. It’s primarily used to create single-page applications where content updates dynamically without reloading the entire page.

**Example:**
```jsx
function Hello() {
  return <h1>Hello, world!</h1>;
}
```

### What is SPA (Single Page Application)?
A **Single Page Application (SPA)** loads a single HTML page and dynamically updates the content as the user interacts with the app, without reloading the page. React is ideal for building SPAs due to its virtual DOM, which allows fast updates to the UI.

### What is JSX (JavaScript XML)
JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like. It looks like HTML but can contain JavaScript logic inside curly braces `{}`.

### What is Vite?
**Vite** is a next-generation frontend build tool that is often used with React for its fast build times and optimized development experience. Unlike traditional build tools (e.g., Webpack), Vite provides an instant development server that leverages modern browser features like ES modules, reducing build time significantly.

**Example:**
To create a React project with Vite, you can use:
```bash
npm create vite@latest my-react-app --template react
```

### What is Babel in React?
**Babel** is a JavaScript compiler that converts JSX (which React uses) into regular JavaScript that browsers can understand. It also allows you to use modern JavaScript features by compiling them into backward-compatible code.

### How React Works?
React builds a **virtual DOM** (a lightweight representation of the real DOM) and compares it with the actual DOM to update only the parts that have changed. This process is known as **reconciliation** and makes React highly efficient at updating the UI without full page reloads.

### What are Components in React and the Difference Between Functional and Class-Based Components
In React, components are the basic building blocks of the UI. They are reusable, isolated pieces of code that define how a part of the app should appear.

There are two types of components:
- **Functional Components**
- **Class Components**

#### Functional Components:
- These are JavaScript functions that return JSX (React’s syntax to define UI elements).
- They are simpler, and with the introduction of **Hooks**, they can manage state and side effects.
- They do not have lifecycle methods (like class components) but can use hooks like `useEffect` to mimic lifecycle behavior.

**Example: Functional Component**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

#### Class Components:
- These are ES6 classes that extend from `React.Component` and have access to lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.
- Class components manage state using `this.state` and update state using `this.setState()`.

**Example: Class Component**
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

#### **Key Differences:**
| Aspect                    | Functional Component | Class Component               |
|---------------------------|----------------------|-------------------------------|
| Syntax                    | Functions             | ES6 Classes                   |
| State Management          | `useState` hook       | `this.state` and `setState()`  |
| Lifecycle Methods          | Handled with hooks like `useEffect` | `componentDidMount`, `componentDidUpdate`, etc. |
| Simplicity & Readability   | Simple, concise       | More complex                  |
| Performance               | Slightly faster due to less overhead | Slightly slower |

### What is ReactDOM and How is it Different from JavaScript DOM?
**ReactDOM** is the package that provides methods to render React components to the real DOM. While the **JavaScript DOM** manipulates elements directly, ReactDOM handles the updates by comparing the virtual DOM with the real DOM and making necessary changes in an efficient way.

**Example:**
```jsx
ReactDOM.render(<App />, document.getElementById('root'));
```

### What are Fragments in React?
**Fragments** allow you to group multiple elements without adding an extra node to the DOM, preventing unnecessary wrapper elements like `<div>`.

**Example:**
```jsx
function App() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Welcome to React!</p>
    </React.Fragment>
  );
}
```

### What are the Ways of Exporting a Function in JavaScript?
In JavaScript, you can export functions in two main ways:
- **Named exports:** Export multiple functions or variables.
- **Default export:** Export a single function or value by default.

**Examples:**
```javascript
// Named export
export function greet() { return "Hello"; }

// Default export
export default function greet() { return "Hello"; }
```

### What are Lifecycle Methods?
**Lifecycle methods** are special methods in React class components that allow you to control what happens during different stages of a component's lifecycle. Every React component goes through three phases:

1. **Mounting** (when the component is first rendered)
2. **Updating** (when the component's state or props change)
3. **Unmounting** (when the component is removed from the DOM)

Here are the key lifecycle methods for each phase:

#### 1. **Mounting Phase** (when the component is created and inserted into the DOM)

- **`constructor()`**: This is called before the component is mounted. It’s commonly used to initialize state or bind event handlers.
  
- **`componentDidMount()`**: This method is called once after the component has been rendered. It's commonly used for side effects like data fetching, setting up subscriptions, or manipulating the DOM.

**Example:**
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    // Fetch data from an API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <div>Data: {this.state.data}</div>;
  }
}
```

#### 2. **Updating Phase** (when the component re-renders due to state or prop changes)

- **`shouldComponentUpdate()`**: This method determines if the component should re-render when its state or props change. Returning `false` can prevent unnecessary renders.

- **`componentDidUpdate(prevProps, prevState)`**: This method is called after the component re-renders. It's often used to handle side effects like fetching new data when props change.

**Example:**
```jsx
componentDidUpdate(prevProps) {
  if (this.props.id !== prevProps.id) {
    // Fetch new data when prop changes
    this.fetchData(this.props.id);
  }
}
```

#### 3. **Unmounting Phase** (when the component is removed from the DOM)

- **`componentWillUnmount()`**: This method is called just before a component is removed from the DOM. It's used to clean up resources like timers, event listeners, or subscriptions.

**Example:**
```jsx
componentWillUnmount() {
  clearInterval(this.timer); // Clear a timer when component is removed
}
```

#### Summary of Lifecycle Methods:

| **Phase**       | **Method**              | **Purpose**                                    |
|-----------------|-------------------------|------------------------------------------------|
| Mounting        | `constructor()`          | Initialize state, bind methods                 |
| Mounting        | `componentDidMount()`    | Run side effects like fetching data            |
| Updating        | `shouldComponentUpdate()`| Control whether the component re-renders       |
| Updating        | `componentDidUpdate()`   | Handle updates after re-rendering              |
| Unmounting      | `componentWillUnmount()` | Clean up resources before component is removed |

### What is State in React?
**State** in React is an object that stores the dynamic data of a component. It allows components to "remember" things, like user input or the result of a calculation, and to update the UI whenever this data changes.

- **Stateful components** can track information between renders, making them dynamic and interactive.
- State is managed using the `useState` hook (in functional components) or `this.state` and `setState` (in class components).

**Example with Functional Component (using `useState`):**
```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" and a function "setCount" to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
```
In this example:
- `useState(0)` initializes the state `count` to 0.
- When the button is clicked, `setCount` is called to update the state, which causes the component to re-render with the new value of `count`.

### What is Prop in React?
**Props** (short for properties) are read-only inputs passed to components from their parent. Props allow components to be dynamic and reusable by passing data to them.

**Example:**
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Aadyaa" />
```

### What is Hook in React?
**Hooks** are special functions introduced in `React 16.8` that allow you to use state and other React features (like lifecycle methods) in **functional components**. Before hooks, only class components could manage state and side effects.

Some of the most common hooks are:
- `useState`: For adding and managing state in a functional component.
- `useEffect`: For side effects, like data fetching or DOM manipulation after render.
- `useContext`: For accessing context values without passing props down manually.

#### Key Hooks in React:
- **`useState`**: Manages state.
- **`useEffect`**: Performs side effects (e.g., data fetching, subscriptions).
- **`useContext`**: Allows you to share values between components without passing props manually.
- **`useRef`**: Accesses DOM elements directly or stores mutable values that persist between renders.
- **`useMemo`**: Memoizes values to avoid expensive calculations on every render.
- **`useReducer`**: Similar to `useState` but for more complex state logic.

**Example:**
```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <p>{count}</p>;
}
```

### What is an Evaluated Expression in React?
React allows the evaluation of JavaScript expressions within JSX using curly braces `{}`. However, you cannot use statements like `if` or `for` directly.

**Example:**
```jsx
const variable = "Hi!";
<h1>{variable}</h1>; // Works

<h1>{if(true)} Hi!</h1>; // Will throw an error
```

You can handle conditions with **ternary operators** or logical AND (`&&`) inside JSX:
```jsx
<h1>{true ? "Hello" : "Goodbye"}</h1>;
```


### Why Were Hooks Introduced and What Problem Do They Solve?
Before **Hooks**, state and side effects (like data fetching or DOM manipulation) could only be handled in **class components**. Functional components were simple but limited: they couldn't manage state, lifecycle, or side effects, which led to some significant issues:

#### 1. Complex Class Components:
- When an app's complexity grew, class components became hard to manage due to the presence of multiple lifecycle methods handling different concerns. For example, `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` could all handle different parts of a component's logic, leading to messy and hard-to-maintain code. 
- **Problem**: Organizing logic inside these lifecycle methods was difficult, especially when unrelated logic was placed in the same method.

#### 2. Code Duplication Across Components:
- Developers often ended up duplicating stateful logic across multiple components (e.g., data fetching or subscribing to an event).
- **Problem**: Code that deals with fetching data, updating it, and cleaning it up was repeated in many places, leading to redundancy.

#### 3. Hard-to-Reuse Logic:
- Class components couldn’t easily share logic related to state and side effects. You could use **Higher-Order Components (HOCs)** or **Render Props**, but both were considered cumbersome and added extra layers of abstraction.
- **Problem**: There was no simple way to reuse stateful logic between components.

#### Solution: Hooks
Hooks were introduced in **React 16.8** to solve these issues by allowing functional components to:
- Use **state** (`useState`)
- Manage **side effects** (`useEffect`)
- Access **lifecycle-like behavior** without the need for class components.

With Hooks:
- You can now have stateful logic inside functional components.
- Hooks make it easy to **reuse logic** across components by simply calling a custom hook.
- The need for complex patterns like HOCs and Render Props has been reduced.

#### Hooks Simplify Code:
Hooks allow you to split component logic by concerns, instead of forcing you to organize it by lifecycle methods. For example, you can have one `useEffect` to manage data fetching and another to handle a subscription.

#### Example: Refactoring Class Component with Hooks
**Class Component with State and Side Effects (Lifecycle Methods):**
```jsx
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Time: {this.state.seconds}</div>;
  }
}
```

**Functional Component with Hooks:**
```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function (like componentWillUnmount)
    return () => clearInterval(interval);
  }, []);

  return <div>Time: {seconds}</div>;
}
```

#### Benefits of Hooks:
1. **No need for class syntax**: You can write simpler code using functional components.
2. **Better logic organization**: Different logic (e.g., intervals, subscriptions) can be grouped into separate hooks instead of being cluttered in lifecycle methods.
3. **Easy code reuse**: You can reuse hooks in different components easily by extracting custom hooks.
