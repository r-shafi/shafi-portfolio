---
slug: '/blog/style-your-bash-terminal-without-zsh'
date: '2021-07-10'
title: 'Style Your Bash Terminal Without ZSH'
info: 'How to tweak linux terminal without using ZSH?'
tags: 'Linux, Bash, Tweaks, Terminal'
---

Tweak your Linux terminal in a minute, without using ZSH.

## Begin Tweaking

Copy this line of code:

```bash
curl -sS https://raw.githubusercontent.com/diogocavilha/fancy-git/master/install.sh | sh
```

Open `Terminal` and paste the copied command there and press enter.

![Bash Terminal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g30k45bf8s0qaavc0tw0.png)

After this command completes, quit your terminal and open it up again.

Voila!

![Bash Terminal - FancyGit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qniyo9edlvpkt30mytwu.png)

You've already tweaked your terminal!

## Further Modification of Already Modified Terminal

I'm not really a fan of this look, so I'm going to modify it a bit.

There's many themes available on the `fancygit` repository.

![Fancygit themes](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/73ulshhjs3li4lj2y6vf.png)

I like the `fancygit human` theme, so I'd open a terminal and enter this exact command.

Now my terminal looks like this:

![fancygit human](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f3m1f0wddsmwfh0gncll.png)

But I'd rather it not show the time.

What are you waiting for, open your terminal, we're going to fix it from there.

On your terminal and enter this command:

```bash
fancygit --help
```

A help menu would appear with all the options available for `fancygit`.

![Fancy-Git Help](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p4y7atoy55x42npxlbsr.png)

We can see that the command `fancygit --disable-show-time` would remove the time, so we just copy it and then quit the menu by pressing `q` and paste the copied command.

![Customize bash terminal theme with fancygit](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lcfagaas94kp1ksyt2gz.png)

Done. We're done.

[Fancy-Git | Github](https://github.com/diogocavilha/fancy-git)
[@shafiemoji | twitter](https://twitter.com/shafiemoji)
