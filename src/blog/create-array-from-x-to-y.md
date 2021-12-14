---
slug: '/blog/create-array-from-n-to-x'
date: '2020-12-24'
title: 'How to Create an Array Containing 1 to N in JavaScript'
info: 'How to create an array beginning at Number-X and that ends at Number-Y?'
tags: 'JavaScript, Array, Destructure, Map Function, Array.from'
---

If you have to create an array that starts at **1** and ends at **1000**, I'll bet $20 that you're not going to type in all the numbers manually.

## But how would you create such an enormous array?

### Using the `For Loop`

Let's begin with one of the most basic method of JavaScript. Almost everyone I know that knows JavaScript learned about the `for loop` at the very beginning of their JS learning path. So I'm assuming you're familiar with it all too well.

Let's see this in action:

```javascript
const bigArray = [];

for (let i = 0; i < 1000; i++) {
  bigArray[i] = i + 1;
}

console.log(bigArray);
// An array starting at 1 that ends at 1000
```

- Here `i` starts at **0** and ends at **999**, this gives the array a length of 1000.
- For each index of the array, we store **that-index** + **1** to it. Because the specification of this array tells us to return an array beginning at 1.
- If we had not added the 1 with every item of the array, we'd have end up with an array beginning at **0** and ending at **999**.

### Using the `Array.from` Method

We can return the same array we created with `for loop` in a much easier way using the `Array.from` method.

Let's see this in action:

```javascript
const numbers = Array.from(
  { length: 1000 },
  (item, index) => (item = index + 1)
);

console.log(numbers);
// we get the same result!
```

What did we do here?

> The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

- If we pass anything iterable to `Array.from` it'd return us an array.
- Remember that after everything array is an object in JavaScript and it have some built in property to it.
- So we destructured the length property out of a newly created array and set its value to 1000.
- The `Array.from` has a built in `map function` to it.
- We iterate over the array of 1000 items with the `map function` and pass in the **current item** and the **current index**.
- Finally we set the **index + 1** value to the current item.

That's how we can easily get back an array beginning at a certain number and ending at another.
