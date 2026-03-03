---
title: "svelte"
date: 2026-02-09 08:21
---

[svelte reference](https://svelte.dev/docs/svelte/svelte)

# runes

keywords. start with `$`.

## $state

reactive state, basically.

```html
<script>
  let count = $state(0);
</script>
<button onclick="{() => count++;}">clicks: {count}</button>
```

contrasting with `useState` in react

```jsx
import { useState } from 'react';
function Counter() {
const [count, setCount] = useState(0);
return (
<button onclick={()=>setCount(count+1);}>
clicks: {count}
</button>
)
}
```

react gives us a get() and set(). svelte does all that under the hood.
if $state has an Array, or Object (through Object.create), its result is a deeply reactive state proxy. proxies, allow svelte to run code when properties are read or written, at granular level. only the properties that changed, and refreshes only on the dependencies.
use $state.raw if need be otherwise.
custom class instances are not proxied, it seems. instead variables can directly be $states instead.

```js
class Todo {
  done = $state(false);
  constructor(text) {
    this.text = $state(text);
  }
  reset() {
    this.text = "";
    this.done = false;
  }
}
```

the compiler itself will transform `done` and `text` into get and set methods, so they're not enumerable.
$state.snapshot: takes a static snapshot of a deeply reactive $state proxy.
$state.eager: when state changes, may not immediately change if await-ed
then, use $state.eager. use sparingly, i presume.

### state as functions

regular addition

```ts
function add(a: number, b: number) {
  return a + b;
}
let a = 1;
let b = 2;
let total = add(a, b);
console.log(total); // 3
a = 3;
b = 4;
console.log(total); // still 3!
```

state-ful thinking works in functions

```ts
function add(getA: () => number, getB: () => number) {
  return () => getA() + getB();
}
let a = 1;
let b = 2;
let total = add(
  () => a,
  () => b,
);
console.log(total()); // 3
a = 3;
b = 4;
console.log(total()); // 7
```

svelte states work by considering the input as states itself

```ts
function add(input: { a: number; b: number }) {
  return {
    get value() {
      return input.a + input.b;
    },
  };
}
let input = $state({ a: 1, b: 2 });
let total = add(input);
console.log(total.value); // 3
input.a = 3;
input.b = 4;
console.log(total.value); // 7
```

you can't (shouldn't) export states. like

```ts
export let count = $state(0);
```

instead, either

- export it as

```ts
export const counter = $state({
  count: 0,
});
```

or don't export the state itself, and instead the functions you write for it. as

```js
let count = $state(0);
export function getCount() {
  return count;
}
export function increment() {
  count += 1;
}
```

---

## $derived

state based on another state. the argument must not have sideeffects

```js
const count = $state(0);
const derived = $derived(count * 2);
```

(can't have something that changes it, like `count++`.)
can add arrow functions with $derived.by

```html
<script>
  let numbers = $state([1, 2, 3]);
  let total = $derived.by(() => {
    let total = 0;
    for (const n of numbers) {
      total += n;
    }
    return total;
  });
</script>
<button onclick="{() => numbers.push(numbers.length+1)}">
  {numbers.join(' + ')} = {total}
</button>
```

$derived(expression) is the equivalent of $derived.by(() => expression)
everything that's within the `$derived`expression is a dependency, and will become dirty if it's changed, causing it to be recalculated. to exempt, you can say`untrack()`
if you want to override "derive"ations, as in [[dev notes#optimistic UI|optimistic UI]]

---

## $effect

side effects. runs when dependencies change. basically the place where you _do things_ instead of _compute things_.

```html
<script>
  let count = $state(0);

  $effect(() => {
    console.log("count changed:", count);
  });
</script>
```

runs once initially, then whenever `count` changes.

mental model:

- `$state` → data
- `$derived` → computation
- `$effect` → side‑effects

things you do here:

- logging
- DOM APIs
- network calls
- subscriptions

things you **do not** do here:

- compute values for rendering (that belongs in `$derived`).

### cleanup

return a function.

```js
$effect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(id);
});
```

same lifecycle intuition as `useEffect`, minus dependency arrays. dependencies are inferred automatically by reads.

---

## $effect.pre

runs _before_ DOM updates instead of after.
use when you need layout reads before paint.

```js
$effect.pre(() => {
  // measure layout before DOM updates
});
```

rare. if you don't know why you need it, you probably don't.

---

## dependency tracking

svelte tracks reads, not declarations.

```js
let a = $state(1);
let b = $state(2);

$effect(() => {
  console.log(a);
});
```

changing `b` does nothing because it wasn't read.

reads inside called functions also count.

```js
function logA() {
  console.log(a);
}

$effect(() => {
  logA();
});
```

compiler/runtime tracks the access dynamically.

---

## untrack

sometimes you want to read state _without subscribing_.

```js
import { untrack } from "svelte";

$effect(() => {
  const value = untrack(() => count);
  console.log(value);
});
```

use cases:

- optimistic UI
- comparing previous values
- avoiding infinite loops

basically: "look but don't react".

---

## passing state around

states are just values with reactive semantics.

```js
function double(x) {
  return $derived(x * 2);
}

let count = $state(2);
let doubled = double(count);
```

---

this is just a random seed instead of an actual blog. something to put on the website. random obsidian notes, if anything. if you read this far o7, because why.
