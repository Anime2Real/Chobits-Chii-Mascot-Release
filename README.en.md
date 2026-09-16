# Chobits-Chii-Mascot-Release

[简体中文](./README.md) ｜ [日本語](./README.ja.md) ｜ [English](./README.en.md)

[![GitHub Release](https://img.shields.io/github/v/release/Anime2Real/Chobits-Chii-Mascot-Release)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases)
[![Downloads](https://img.shields.io/github/downloads/Anime2Real/Chobits-Chii-Mascot-Release/total)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases)
[![Deploy to GitHub Pages](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml/badge.svg)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)

The public release channel for the Chobits desktop mascot. This repository hosts the release artifacts (installers and auto-update metadata); the application source code lives in a private repository. `app/` contains the source code of the release page, which is automatically built by GitHub Actions and deployed to GitHub Pages.

## Download

Download the latest version from the release page (recommended):

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

The page automatically detects your platform and recommends the matching installer. You can also download directly from the [Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) page:

| Platform | File |
|---|---|
| macOS | `Chobits_<version>_darwin_arm64.dmg` (Apple Silicon) / `Chobits_<version>_darwin_x64.dmg` (Intel) |
| Windows | `Chobits_<version>_win32_x64.exe` (NSIS installer) |
| Linux | `Chobits_<version>_linux_x86_64.AppImage` / `Chobits_<version>_linux_amd64.deb` |

> The macOS build is notarized by Apple. The Windows installer is code-signed (Certum). If SmartScreen still shows "Windows protected your PC", choose "More info → Run anyway" (the prompt disappears as the new certificate builds reputation).

The app has built-in auto-updates, so you won't need to return to this page after installation.

## Notes

- The application source code is open source under the MIT License: [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot). This repository hosts the release artifacts and auto-update metadata; the release page source under `app/` is MIT-licensed as well
- Please report issues through the in-app feedback channel

## Licensing

- **Source code**: the application and release page sources are open source under the [MIT License](https://github.com/Anime2Real/Chobits-Chii-Mascot/blob/main/LICENSE) — free to view, modify, and redistribute
- **Binary distribution channel**: the installers in this repository's Releases and the auto-update metadata are distributed under the End User License Agreement in [LICENSE](./LICENSE) — free for personal, non-commercial use, with redistribution and reverse engineering of the binaries restricted; MIT rights to the source code do not extend to these binary builds
- **Brand assets**: the Chobits name, logos, and character artwork are all rights reserved; commercial use requires prior written permission
