---
slug: '/blog/create-array-months-javascript'
date: '2020-12-19'
title: 'Create an Array of Months with JavaScript'
info: 'How to create an Array of Months with JavaScript'
tags: 'JavaScript, Array, Months, Date, Array.from'
---

Creating an array of months in JavaScript is a very cumbersome yet necessary task. We often have to create an array of months but have to type in the months manually or copy-paste it from the internet.

But not anymore! Today I'll show you how you can create an array of months with just one line of code and will explain how this code works very thoroughly.

## Lets Begin

> The Array.from() static method creates a new, shallow-copied Array instance from an **array-like** or **iterable object**.

In JavaScript, an **iterable object** is anything that we can loop over with `for of`.

> Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

If we pass a string in the `Array.from` method, we'll see that it iterates over the string and returns an array with every letter of the string as an item in the array.

```javascript
const arr = Array.from('shafi');

console.log(arr);
// ["s", "h", "a", "f", "i"]
console.log(arr.length);
// 5
```

We also know that every array has a property called `length` built into them.
We can `destructure` the length from within the `Array.from` method and return an array of _length number_ of `undefined` items.

```javascript
const arr = Array.from({ length: 5 });

console.log(arr);
// [undefined, undefined, undefined, undefined, undefined]
```

### `Array.from` Map Function

`Array.from` can take in multiple parameters. While the **array-like** or **iterable object** is necessary, we can also pass along an optional `map function`. The `map function` iterates over the newly created arrays items.

```javascript
const arr = Array.from([10, 20, 30], (item) => item + 5);

console.log(arr);
// [15, 25, 35]
```

The `map function` can also take in multiple parameters. While you must have to pass in the **current item** of the array, it can also encompass the `index` and the array itself.

Suppose we've to create an array of numbers beginning from 1 and ending at 5 (inclusive). We can easily create it using the `Array.from` and it's `map function`.

```javascript
const arr = Array.from({ length: 5 }, (item, index) => index + 1);

console.log(arr);
// [1, 2, 3, 4, 5]
```

Here we had to define the `item` parameter even though we aren't going to use it, because the `index` would've remained inaccessible without defining the item.

### Creating an Array of Months

Now that we understand how the `Array.from` method works, we can easily create an Array of Months.

```javascript
const months = Array.from({ length: 12 }, (item, i) => {
  return new Date(0, i).toLocaleString('en-US', { month: 'long' });
});

console.log(months);
// ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
```

## OhMyGod! What did you do with the Date Object?

We can pass arguments in `Date` object in the following order:

> new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])

Here we only care about the month, but we can't pass in a `monthIndex` without passing the year. So we pass in the **0** as the argument for `year`.

Next, we pass in the `index` of the `current item` of the array as the `month index`.
This works out perfectly as we have an array with 12 items beginning at index 0 and ending at index 11. And we know that in JavaScript months begin at index 0 and ends at index 11.
So we've nailed the order of the months.

Now we use the `toLocaleString` method and tell it to modify the date in `en-US` and pass it an option to only return the month in full length.

That's everything we did here to get back an array of months.

### One more thing

We can return the month object in any language we want by changing the first parameter of the `toLocaleString` method.

```javascript
const months = Array.from({ length: 12 }, (item, i) => {
  return new Date(0, i).toLocaleString('bn-BD', { month: 'long' });
});

console.log(months);
// ["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
```
