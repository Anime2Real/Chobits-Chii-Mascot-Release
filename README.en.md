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

> The macOS build is notarized by Apple. The Windows build is not code-signed yet — if SmartScreen blocks it, choose "More info → Run anyway".

The app has built-in auto-updates, so you won't need to return to this page after installation.

## Notes

- The source code repository is private; this repository is for public releases only
- Please report issues through the in-app feedback channel

## Why the source code is not open yet

The source code of Chobits-Chii-Mascot is currently not open source. The main reason is to ensure the security of the software's usage data: until we have confirmed that the project has no major risk vulnerabilities, we will keep the source code private to prevent potential security issues from being exploited. Once the project has passed thorough security review and verification, we will re-evaluate our open-source plans.

## License

This software is proprietary freeware (not open source), released under the End User License Agreement in [LICENSE](./LICENSE). It is free to download and use for personal, non-commercial purposes. Modification, reverse engineering, redistribution, and unauthorized commercial use are prohibited.
