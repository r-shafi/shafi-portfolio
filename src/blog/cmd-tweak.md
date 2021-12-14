---
slug: '/blog/shorten-windows-cmd-path'
date: '2020-12-18'
title: 'How to Shorten Directory Path in Windows Command Prompt'
info: 'How to edit directory path in Windows Command Prompt'
tags: 'Windows, CMD, Tweaks'
---

This is my command prompt when I open it up

![command prompt when I open it up](https://i.imgur.com/Yb2aosY.png)

I usually keep my codes inside `Documents\Codes`. Inside the `codes` directory I have many more subdirectories.

![](https://i.imgur.com/8oq7SI4.png)

This is already getting a bit hairy, but I have to dive a little deeper to get to the directory I want to execute my command in.

![](https://i.imgur.com/AKkPywg.png)

Do you see how little space remains for me to execute my command. Now my only option to keep my sanity while writing my command is to make the `CMD` window full screen, but I don't want to do that.

## So Here's My Solution

First of all, open `Start Menu` and write `environment`

![](https://i.imgur.com/9MbrwuC.png)

Click on `Edit the System Environment Variable` option.

It'd open a popup window, there click on `Environment Variables...`

![](https://i.imgur.com/7i7mRAq.png)

Clicking this would open another popup window, on there click on the `New` button under **User Variable for Joe-Mama-Name**

![](https://i.imgur.com/2WaxBAE.png)

This action would open up a new window called `New User Variable`.

Once there type in `prompt` in **Variable Name**.
After that type `$G$S` in **Variable Value** Field.

![](https://i.imgur.com/TJJMDp0.png)

Then press okay and close every window related to the `Environment`.

Now open up the `CMD`, you'll see something like this!

![](https://i.imgur.com/bLuvPM7.png)

Clean and Cool CMD!

[You can find all the variables to tweak the CMD here](http://www.hanselman.com/blog/a-better-prompt-for-cmdexe-or-cool-prompt-environment-variables-and-a-nice-transparent-multiprompt)
