---
slug: '/blog/how-to-install-wine-and-run-windows-software-on-linux'
date: '2021-07-17'
title: 'How to Install Wine and Run Windows Software on Linux'
info: 'Guide to Install Wine and Run Windows Software on Linux'
tags: 'Windows, Linux, Ubuntu, Trick'
---

By following this guide, you will be able to run Windows application on Distributions such as Ubuntu, Fedora, Pop!\_OS, Elementary OS, Linux Mint, Zorin OS etc.

## Installing Wine - Ubuntu

> This part of the tutorial is also applicable for Pop!\_OS or any other Ubuntu based distros.

- Download the Wine repository

```bash
wget -nc https://dl.winehq.org/wine-builds/winehq.key
```

- Add the repository key to your system

```bash
sudo apt-key add winehq.key
```

- Add the repository | Ubuntu 21.04

```bash
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ hirsute main'
```

- Add the repository | Ubuntu 20.10

```bash
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ groovy main'
```

- Update System Packages

```bash
sudo apt update
```

- Finally, Install Wine

```bash
sudo apt install --install-recommends winehq-stable
```

## Installing Wine - Fedora

- Add the Repository | Fedora 34

```bash
sudo dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/34/winehq.repo
```

- Add the Repository | Fedora 33

```bash
sudo dnf config-manager --add-repo https://dl.winehq.org/wine-builds/fedora/33/winehq.repo
```

- Install Wine

```bash
sudo dnf install winehq-stable
```

## Downloading and Running Windows Applications

- To keep this short [download Notepad++](https://notepad-plus-plus.org/downloads/v8.1.1/)

- Double click on the Installer File (`exe`), It'd launch a Wine instance.

- Because this is our first use, wine might ask us to install one or two additional packages required to run Windows Applications. Allow to install them.

- After that our installer for Notepad++ would start and we'd proceed to install the app as if we were on Windows.

![Notepad++ on Linux](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cne0aaqfjf4kk4rwhev4.png)

Well, we're up and running folks!

You can access your installed application later by the Application Menu

![Windows App on Linux Menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/17cic71i51ftu12x0pls.png)
