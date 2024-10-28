# call v/s bind
<p>call and bind are both used to control the context of this in JavaScript functions, but they behave differently.

call:

Invokes the function immediately.

Allows you to pass arguments directly.</p>
<code>
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "John" };
greet.call(person, "Hello"); // Outputs: "Hello, John"

<code>
<p>bind:

Does not invoke the function immediately.

Returns a new function with the specified this context and optional arguments.</p>
```
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "John" };
const boundGreet = greet.bind(person);
boundGreet("Hi"); // Outputs: "Hi, John"
```
<p>
bind:

Does not invoke the function immediately.

Returns a new function with the specified this context and optional arguments.
</p>

```
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const person = { name: "John" };
const boundGreet = greet.bind(person);
boundGreet("Hi"); // Outputs: "Hi, John"

```

<p>
call executes the function immediately with a specific this context.

bind returns a new function that can be executed later with a specific this context.
</p>

