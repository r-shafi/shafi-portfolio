---
slug: '/blog/js-date-time-format'
date: '2020-12-13'
title: 'Format Date and Time with JavaScript'
info: 'We can use the DateTimeFormat constructor of Intl object to quickly format any Date object for us and return a formatted date string'
tags: 'JavaScript, Date, Time, Format, Intl, DateTimeFormat'
---

> The **Intl** object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting.

## How Can I Format Date and Time in JavaScript?

Suppose we have a `Date` object in a variable called `now`

```javascript
const now = new Date();
```

If we log this `now` variable in the console, we'll see an unformatted string of our location specific current date and time with many unnecessary information being printed out.

```javascript
console.log(now);
// Sun Dec 13 2020 10:38:06 GMT+0600 (Bangladesh Standard Time)
```

We can use the `DateTimeFormat` constructor of `Intl` object to quickly format the `now` Date object for us and return a formatted date string

```javascript
const formatDateInBangla = new Intl.DateTimeFormat('bn-BD').format(now);

console.log(formatDateInBangla);
// ১৩/১২/২০২০
```

The `DateTimeFormat` constructor can take two `parameters`; `locale` or default date formatting for language and an `options object`. We'll talk about the `options object` soon.

We're going to write the same code snippet as last time with a slight change, we're going to set the `locale` to `en-GB` or British English instead of `bn-BD` or Bangla (Bangladesh).

```javascript
const formatDateInEnglish = new Intl.DateTimeFormat('en-GB').format(now);

console.log(formatDateInEnglish);
// 13/12/2020
```

### Using the Options Object

The `options object` can take some or all of the following properties [described here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

To keep this tutorial short, we're only going to use `dateStyle`
and `timeStyle` options.

#### Using `dateStyle`

The date formatting style has four possible values:

- 'full'
- 'long'
- 'medium'
- 'short'

This time we're going to pass an `option object` with `dateStyle` as a key and `'full'` as its value.

```javascript
const option = {
  dateStyle: 'full',
};

const formatDate = new Intl.DateTimeFormat('en-GB', option).format(now);

console.log(formatDate);
// Sunday, 13 December 2020
```

Remember when we talked about the `DateTimeFormat` constructors ability to take in two arguments? Well, look closely, we've passed in the `option object` we created.
That `option object` is telling the constructor to format the `now` date object in full form in British standard (passed in as locale).

Cool! Now it's time for you to test out the other three values of the `dateStyle` and see what they returns!

#### Using `timeStyle`

The time formatting style have the same four possible values as the `dateStyle` property.

Our `now` variable, which is a date object, contains information about the _time_ it was created at.
This time we're going to format the `now` variable using the `timeStyle` property as the **only** option and see what it returns to us.

```javascript
const formatTime = new Intl.DateTimeFormat('en-GB', {
  timeStyle: 'short',
}).format(now);
// You can pass in the option object inline!

console.log(formatTime);
// 11:38
```

Well, that's not so pretty, is it? Is it day or night?

Let's try something else.

```javascript
const options = {
  timeStyle: 'short',
  hour12: true,
};
// Obviously you can pass multiple options

const formatTimeNotUgly = new Intl.DateTimeFormat('en-GB', options).format(now);

console.log(formatTimeNotUgly);
// 11:43 am
```

I hope you now understand how the `Intl.DateTimeFormat` constructor works. [Please read this MDN Documentation for an in depth understanding of Intl.DateTimeFormat.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
