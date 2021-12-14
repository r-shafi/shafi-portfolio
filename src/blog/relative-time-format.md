---
slug: '/blog/relative-time-format'
date: '2020-12-16'
title: 'Format Time and Date Relatively with JavaScript'
info: 'Intl.RelativeTimeFormat enables localized formatting of relative times without sacrificing performance.'
tags: 'JavaScript, Relative, Time, Format, Intl, RelativeTimeFormat'
---

> `Intl.RelativeTimeFormat` enables localized formatting of relative times without sacrificing performance.

We've all seen websites using **Just now**, **an hour ago**, **a week ago** etc. to describe when the post was created.
Almost all of these websites uses popular libraries like _Moment.js_, _Globalize_, _date_fns_ and-all to use this feature.

Today we'd look at how we can do that with just Vanilla JavaScript!

## A Quick Example

Just to show you how the `Intl.RelativeTimeFormat` constructor works

```javascript
const when = new Intl.RelativeTimeFormat('en').format(-1, 'day');
console.log(when);
// "1 day ago"
```

Here we passed the `Intl.RelativeTimeFormat` an argument, a string with a **BCP 47 language tag**. This argument decides the output language.

Additionally, the `Intl.RelativeTimeFormat` constructor accepts an optional `options` argument, which gives us more control over the output. We'd talk about it later in this tutorial.

Then we told the `Intl.RelativeTimeFormat` constructor to format the relative time (the -1 value) in `day` unit.

Lets tweak this code a bit (copy this and check the code in your console)

```javascript
const when = new Intl.RelativeTimeFormat('bn').format(-5, 'day');
console.log(when);
// "৫ দিন আগে" (translation: 5 days ago)
```

And of course we can set times in future as well

```javascript
const when = new Intl.RelativeTimeFormat('en').format(2, 'day');
console.log(when);
// in 2 days
```

### The `options` Object

The `options` object gives us more control over the output. It have three possible values:

- localeMatcher
- numeric
- style

[Read about the options in details here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat)

```javascript
const options = {
  numeric: 'auto',
};

const when = new Intl.RelativeTimeFormat('en', options).format(-1, 'day');

console.log(when);
// yesterday
```

### Possible Values for Unit

You can pass in the following values in `Intl.RelativeTimeFormat(locale).format(relative time, **UNIT**)`:

- second
- minute
- hour
- day
- month
- quarter
- year

### Logically Show When Something Was Created

Suppose your post was created at some date

```javascript
const createdAt = new Date(2020, 11, 10); // December 10, 2020
```

And I, the user visited your post right now

```javascript
const userVisited = new Date();
```

If we subtract `createdAt` from `userVisited` we'll get a number in milliseconds

```javascript
const diff = userVisited - createdAt;
// some value in milliseconds
```

Now we need to convert this `diff` in days

```javascript
const toSec = diff / 1000;
// convert the milliseconds to seconds

const toMin = toSec / 60;
// convert the seconds to minutes

const toHour = toMin / 60;
// convert the minutes to hours

const toDays = toHour / 24;
// convert the hours to days

// now we'll round the days up/down
const rounded = Math.round(toDays);
```

And finally we'll pass the `rounded` value to `Intl.RelativeTimeFormat` constructors `format` method

```javascript
const when = new Intl.RelativeTimeFormat('en').format(-rounded, 'day');

// because your post was created in past
// we pass a minus sign before the rounded
// to get the output in past tense
```

That's it for today, obviously you can make this code a lot more dynamic to show different types of `unit` based on when the post was created. Try that out on your own.

---

[Format Number With JavaScript](https://shafi.ml/blog/js-number-format)

[Format Date and Time with JavaScript](https://shafi.ml/blog/js-date-time-format)
