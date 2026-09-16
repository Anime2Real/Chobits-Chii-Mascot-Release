# Chobits-Chii-Mascot-Release

[简体中文](./README.md) ｜ [日本語](./README.ja.md) ｜ [English](./README.en.md)

[![GitHub Release](https://img.shields.io/github/v/release/Anime2Real/Chobits-Chii-Mascot-Release)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases)
[![Downloads](https://img.shields.io/github/downloads/Anime2Real/Chobits-Chii-Mascot-Release/total)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases)
[![Deploy to GitHub Pages](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml/badge.svg)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)

Chobits 桌宠的公开发布渠道。本仓库承载 Release 产物（安装包与自动更新元数据），应用源码在私有仓库；`app/` 为发布主页的页面源码，由 GitHub Actions 自动构建并部署到 GitHub Pages。

## 下载

前往发布主页下载最新版本（推荐）：

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

页面会自动识别你的平台并推荐对应的安装包，也可以直接访问 [Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) 页面下载：

| 平台 | 文件 |
|---|---|
| macOS | `Chobits_<version>_darwin_arm64.dmg`（Apple Silicon）/ `Chobits_<version>_darwin_x64.dmg`（Intel） |
| Windows | `Chobits_<version>_win32_x64.exe`（NSIS 安装包） |
| Linux | `Chobits_<version>_linux_x86_64.AppImage` / `Chobits_<version>_linux_amd64.deb` |

> macOS 版本已经过 Apple 公证；Windows 版本暂未做代码签名，SmartScreen 拦截时请选择「更多信息 → 仍要运行」。

应用内置自动更新，安装后无需手动回到本页。

## 说明

- 源码仓库为私有仓库，本仓库仅用于公开发布
- 问题反馈请通过应用内渠道进行

## 关于暂不开源

Chobits-Chii-Mascot 的源码目前暂不开源。主要原因是为了确保项目软件的使用数据安全：在确认项目不存在重大风险漏洞之前，我们将保持源码私有，避免潜在安全问题被恶意利用。待项目完成充分的安全审查与验证后，我们会重新评估开源计划。

## 许可

本软件为专有免费软件（非开源），依据 [LICENSE](./LICENSE) 中的最终用户许可协议发布：可免费下载并用于个人非商业用途，禁止修改、逆向工程、再分发及未经授权的商用。
