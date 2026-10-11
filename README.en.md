<div align="center">
	<img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
	<h1>Chobits-Chii-Mascot-Release</h1>
	<p><b>Chii~</b> the release page and installer distribution for Chii's client</p>
	<p>The public release channel for the Chobits desktop mascot. This repository hosts the release artifacts (<b>installers and auto-update metadata</b>). <code>app/</code> contains the source code of the release page, which is automatically built by <b>GitHub Actions</b> and deployed to <b>GitHub Pages</b>. For server and data security reasons, the Mascot client source code is not open-sourced at this time. We will consider open-sourcing it after completing a thorough security review.</p>
	<p>
		<a href="./README.md">简体中文</a> ｜ <a href="./README.ja.md">日本語</a> ｜ <a href="./README.en.md">English</a>
	</p>
	<p>
		<a href="https://madewithlove.org.in"><img alt="Made with Love" src="https://img.shields.io/badge/Made%20with-Love-ff69b4.svg"></a>
		<a href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Chobits--Chii--Mascot--Release-181717?logo=github"></a>
		<a href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases"><img alt="GitHub Release" src="https://img.shields.io/github/v/release/Anime2Real/Chobits-Chii-Mascot-Release"></a>
		<a href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases"><img alt="Downloads" src="https://img.shields.io/github/downloads/Anime2Real/Chobits-Chii-Mascot-Release/total"></a>
		<a href="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml"><img alt="Deploy to GitHub Pages" src="https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml/badge.svg"></a>
		<img alt="Platform" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey">
		<a href="LICENSE"><img alt="License: EULA" src="https://img.shields.io/badge/License-EULA-orange.svg"></a>
	</p>
</div>

> 💖 If this project helps you, please give it a Star on [GitHub](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release) — your support helps more people discover Chii!

> ⚠️ Note: copyright of Chobits and its characters belongs to CLAMP and the respective rights holders. The installers distributed here are provided under the End User License Agreement (EULA) in [LICENSE](./LICENSE) — personal, non-commercial use only, with redistribution and reverse engineering prohibited.

A **Chii (ちぃ)** character project from the anime *Chobits*: the release page and installer distribution for the desktop mascot client. This repository is the user-facing distribution outlet for [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) — the in-app auto-update points at the Releases here, and the release page source lives in `app/`; speech synthesis, persona dialogue, speech recognition and the Live2D model are handled by [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS), [Chobits-Chii-LLM](https://github.com/Anime2Real/Chobits-Chii-LLM), [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) and [Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) respectively.

## 🌿 Branches

| Branch | Purpose | Notes |
| --- | --- | --- |
| [`main`](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/tree/main) | The only content branch (default) | The release page source under `app/` and this README are maintained here; GitHub Pages is built and deployed from `deploy.yml` on this branch |
| `dependabot/*` | Dependabot automated dependency bumps | They only touch `.github/workflows/deploy.yml` or `app/package.json` / `app/package-lock.json`; their README is merely an older snapshot from the branch point and contains no unique content |

## ⬇️ Download

Download the latest version from the release page (recommended):

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

The page lists the latest installers for each platform. You can also download directly from the [Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) page:

| Platform | File |
|---|---|
| macOS | `Chobits_<version>_darwin_arm64.dmg` (Apple Silicon) / `Chobits_<version>_darwin_x64.dmg` (Intel) |
| Windows | `Chobits_<version>_win32_x64.exe` (NSIS installer) |
| Linux | `Chobits_<version>_linux_x86_64.AppImage` / `Chobits_<version>_linux_amd64.deb` |

> The macOS build is notarized by Apple. The Windows installer is code-signed (Certum). If SmartScreen still shows "Windows protected your PC", choose "More info → Run anyway" (the prompt disappears as the new certificate builds reputation).

The app has built-in auto-updates, so you won't need to return to this page after installation.

> **A note from Chii (・ω・)ノ**: launch the app after installation and Chii will settle into a corner of your desktop.

## ℹ️ Notes

- For server and data security reasons, the Mascot client source code is not open-sourced at this time. We will consider open-sourcing it after completing a thorough security review. This repository hosts the release artifacts and auto-update metadata
- Please report issues through the in-app feedback channel

## 📄 License

- **Source code**: for server and data security reasons, the Mascot client source code is not open-sourced at this time. We will consider open-sourcing it after completing a thorough security review; until then, the application and release page sources are not released under any open-source license and all rights are reserved
- **Binary distribution channel**: the installers in this repository's Releases and the auto-update metadata are distributed under the End User License Agreement in [LICENSE](./LICENSE) — free for personal, non-commercial use, with redistribution and reverse engineering of the binaries restricted
- **Brand assets**: the Chobits name, logos, and character artwork are all rights reserved; commercial use requires prior written permission

[LICENSE](./LICENSE) is a bespoke End User License Agreement (EULA) written by Anime2Real (`Copyright (c) 2026 Anime2Real. All rights reserved.`), not a standard open-source license; the wording above follows that file.

## ⚠️ Disclaimer

- This project is intended for academic research and personal study only and claims no rights to the original work's copyright.
- Features implemented or content generated with this software must not be used in ways that infringe the rights of the original work (CLAMP) or the involved voice actress (Tanaka Rie).
- The project will be taken down if the rights holders so request.

## 🙏 Related Projects

- [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) — Chii's desktop mascot client (Electron, Live2D / sprite rendering)
- [Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) — Live2D models and motion generation
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) — Chii voice TTS (GPT-SoVITS / CosyVoice approaches)
- [Chobits-Chii-LLM](https://github.com/Anime2Real/Chobits-Chii-LLM) — Chii persona dialogue / translation service
- [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — speech recognition service (batch + streaming)
- [Chobits-Chii-Pipecat](https://github.com/Anime2Real/Chobits-Chii-Pipecat) — real-time voice conversation pipeline orchestration
- [Chobits-Chii-Resource](https://github.com/Anime2Real/Chobits-Chii-Resource) — shared family assets
