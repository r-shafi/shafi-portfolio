---
slug: '/blog/css-image-resize'
date: '2020-12-23'
title: 'How to Resize Uneven Sized Images without breaking their Aspect Ratio'
info: 'Give custom height and width to Images without breaking their aspect ratio.'
tags: 'CSS, Images, Resize, Aspect Ratio, Custom Size'
---

We often have to work with images that varies in size and aspect ratio. But we have to fit them in a container, and to keep the aesthetic of our design we usually choose to resize all the images into a same size.

But taking the easy way out means we have to deal with this...

```css
img {
  height: 200px;
  width: 200px;
}
```

This is how they look 🥴

![](https://i.imgur.com/TZ5EhRi.png)

The images have killed their aspect ratios to fit in the `height` and `width` and this doesn't really help with the aesthetic.

But did you know that we can fix that by adding just one more line of code in our CSS' `img` property?

```css
img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}
```

Whoo! Our images kept their aspect ratios this time around!

![](https://i.imgur.com/7IOFpTX.png)
