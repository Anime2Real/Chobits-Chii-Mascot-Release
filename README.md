<div align="center">
	<img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
	<h1>Chobits-Chii-Mascot-Release</h1>
	<p><b>叽～</b> 小叽的客户端发布页与安装包分发</p>
	<p>Chobits 桌宠的公开发布渠道。本仓库承载 <b>Release 产物</b>（安装包与自动更新元数据），<code>app/</code> 为发布主页的页面源码，由 <b>GitHub Actions</b> 自动构建并部署到 <b>GitHub Pages</b>。出于服务器数据安全考虑，Mascot 客户端源码暂不开源。待完成完整安全评估后，我们将进行开源考虑。</p>
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

> 💖 如果这个项目对你有帮助，欢迎在 [GitHub](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release) 点个 Star —— 你的支持能让更多人发现小叽！

> ⚠️ 注意：Chobits 及其角色的版权归 CLAMP 及相关权利方所有。本仓库分发的安装包依据 [LICENSE](./LICENSE) 中的最终用户许可协议（EULA）提供，仅限个人非商业用途，并禁止再分发与逆向工程。

《人形电脑天使心》(Chobits) 中 **小叽 (Chii / ちぃ)** 角色的客户端发布页与安装包分发项目：本仓库是桌宠客户端 [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) 面向用户的分发出口——应用内的自动更新就指向这里的 Releases，发布主页源码在 `app/`；家族里的语音合成、人格对话、语音识别与 Live2D 模型分别由 [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS)、[Chobits-Chii-LLM](https://github.com/Anime2Real/Chobits-Chii-LLM)、[Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR)、[Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) 承担。

## 🌿 分支总览

| 分支 | 定位 | 说明 |
| --- | --- | --- |
| [`main`](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/tree/main) | 唯一内容分支（默认分支） | 发布页源码 `app/` 与本 README 均以此为准，GitHub Pages 也由该分支的 `deploy.yml` 构建部署 |
| `dependabot/*` | Dependabot 自动依赖升级分支 | 仅改动 `.github/workflows/deploy.yml` 或 `app/package.json` / `app/package-lock.json`，其 README 只是分叉时点的旧版快照，不含独立内容 |

## ⬇️ 下载

前往发布主页下载最新版本（推荐）：

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

页面会按平台列出最新的安装包，也可以直接访问 [Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) 页面下载：

| 平台 | 文件 |
|---|---|
| macOS | `Chobits_<version>_darwin_arm64.dmg`（Apple Silicon）/ `Chobits_<version>_darwin_x64.dmg`（Intel） |
| Windows | `Chobits_<version>_win32_x64.exe`（NSIS 安装包） |
| Linux | `Chobits_<version>_linux_x86_64.AppImage` / `Chobits_<version>_linux_amd64.deb` |

> macOS 版本已经过 Apple 公证；Windows 安装包已完成代码签名（Certum）。若 SmartScreen 仍提示「Windows 已保护你的电脑」，请选择「更多信息 → 仍要运行」（新证书积累信誉后提示会消失）。

应用内置自动更新，安装后无需手动回到本页。

> **小叽提示 (・ω・)ノ**：安装完成后启动应用，小叽就会住进你的桌面角落啦。

## ℹ️ 说明

- 出于服务器数据安全考虑，Mascot 客户端源码暂不开源。待完成完整安全评估后，我们将进行开源考虑；本仓库用于公开发布安装包与自动更新元数据
- 问题反馈请通过应用内渠道进行

## 📄 许可协议

- **源码**：出于服务器数据安全考虑，Mascot 客户端源码暂不开源。待完成完整安全评估后，我们将进行开源考虑；在此之前，应用与发布页源码均未以开源许可证发布，保留所有权利
- **二进制分发渠道**：本仓库 Releases 上的安装包与自动更新元数据依据 [LICENSE](./LICENSE) 中的最终用户许可协议（EULA）发布——免费用于个人非商业用途，限制对安装包的再分发与逆向
- **品牌素材**：Chobits 名称、Logo 与角色美术素材保留所有权利，商用需事先书面授权

[LICENSE](./LICENSE) 为 Anime2Real 自写的最终用户许可协议（EULA，`Copyright (c) 2026 Anime2Real. All rights reserved.`），不是任何标准开源许可证；本 README 的表述以该文件为准。

## ⚠️ 免责声明

- 本项目仅用于学术研究与个人学习，不构成对原作品版权的任何主张。
- 使用本软件实现的功能或生成的内容，不得用于侵犯原作品（CLAMP）及相关声优（田中理惠）权益的用途。
- 若权利方提出要求，本项目将被下架。

## 🙏 相关项目

- [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) — 小叽桌宠客户端（Electron，Live2D / Sprite 双渲染）
- [Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) — Live2D 模型与动作生成
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) — 小叽声线 TTS（GPT-SoVITS / CosyVoice 两方案）
- [Chobits-Chii-LLM](https://github.com/Anime2Real/Chobits-Chii-LLM) — 小叽人格对话 / 翻译服务
- [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — 语音识别服务（批量 + 流式）
- [Chobits-Chii-Pipecat](https://github.com/Anime2Real/Chobits-Chii-Pipecat) — 实时语音对话 pipeline 编排
- [Chobits-Chii-Resource](https://github.com/Anime2Real/Chobits-Chii-Resource) — 家族共享素材
