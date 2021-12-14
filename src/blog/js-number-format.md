---
slug: '/blog/js-number-format'
date: '2020-12-14'
title: 'Format Number with JavaScript'
info: 'The Intl.NumberFormat() constructor creates objects that enable language sensitive number formatting.'
tags: 'JavaScript, Number, Format, Intl, NumberFormat'
---

> The `Intl.NumberFormat()` constructor creates objects that enable language sensitive number formatting.

Suppose we have to print out a number to our users display, we store that number in a variable and put it in the `DOM` in the most convenient method for us.

```javascript
const numberToDisplay = 1000000;
// Show it to the user
```

But when we show it to the user, the number gets printed out exactly as it was created, with no formatting. Let's check out what the user sees.

```javascript
console.log(numberToDisplay);
// 1000000
```

It's sort of a trouble for the user to decipher the exact value of the output, especially if the output is a big number.

We want our users to get the best experience in the web when they are using our site, but little inconveniences like this becomes the greatest obstacle in giving them the best experience.

## How can we fix this?

The easiest way to format any `number` is to use the `Intl.NumberFormat` constructor. The constructor takes in two arguments; `locale`, a string with a BCP 47 language tag and an `options` object.

Lets see this in action.

```javascript
const num = 10000000;
const formatNum = Intl.NumberFormat('en-US').format(num);
// This time we're only passing the `locale` parameter

console.log(formatNum);
// 10,000,000
```

We haven't done much, but the number output is already more easier to read.

We can also print out the number in any language we want by changing the `locale` argument.

```javascript
const num = 10000000;
const formatNumInBangla = Intl.NumberFormat('bn-BD').format(num);

console.log(formatNumInBangla);
// ১,০০,০০,০০০
```

To print out the number in your language [find out the BCP 47 language tag for your language.](https://www.currency-iso.org/en/home/tables/table-a1.html)

### Advanced Formatting with `Options Object`

The `Option Object` can contain some or all of the properties listed [in this page.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)

To keep this tutorial short, we're going to use few of the most common properties of the `Option Object`.

#### Property: `style` and `currency`

`style` property defines the formatting style to use, it has four possible values:

- decimal
- currency
- percent
- unit

We're going to use the `currency` _value_ (**NOT THE PROPERTY**), but using the `style` property with the value `currency` as the only option will lead to an error.

```javascript
const optionsObject = {
  style: 'currency',
};

const formatSomeNum = Intl.NumberFormat('en-US', optionsObject).format(1000);

console.log(formatSomeNum);
// Uncaught TypeError: Currency code is required with currency style.
```

We'll have to pass a second option `currency` with a **ISO 4217 currency code**.

```javascript
const num = 1000000000;

const formatInUSD = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(num);

console.log(formatInUSD);
// $1,000,000,000.00
```

Remember, we can print out the number in any language we want.

```javascript
const num = 1000000000;

const formatInBDT = Intl.NumberFormat('bn-BD', {
  style: 'currency',
  currency: 'BDT',
}).format(num);

console.log(formatInBDT);
// ১,০০,০০,০০,০০০.০০৳
```

#### Property: `notation`

`notation` property has four possible values:

- standard
- scientific
- compact
- engineering

We're going to use the `compact` value in this example.

```javascript
const someNum = 20000000000;

const formatNum = Intl.NumberFormat('en-US', { notation: 'compact' }).format(
  someNum
);

console.log(fomatNum);
// 20B
```

This is it for today, remember to check out the [MDN Documentation about NumberFormat for many more awesome options and their usages.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)

---

[Format Date and Time with JavaScript](https://shafi.ml/blog/js-date-time-format)
