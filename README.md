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

> macOS 版本已经过 Apple 公证；Windows 安装包已完成代码签名（Certum）。若 SmartScreen 仍提示「Windows 已保护你的电脑」，请选择「更多信息 → 仍要运行」（新证书积累信誉后提示会消失）。

应用内置自动更新，安装后无需手动回到本页。

## 说明

- 应用源码以 MIT 协议开源：[Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot)；本仓库用于公开发布安装包与自动更新元数据，`app/` 发布页源码同属 MIT
- 问题反馈请通过应用内渠道进行

## 许可口径

- **源码**：应用与发布页源码以 [MIT 协议](https://github.com/Anime2Real/Chobits-Chii-Mascot/blob/main/LICENSE) 开源，可自由查看、修改与再分发
- **二进制分发渠道**：本仓库 Releases 上的安装包与自动更新元数据依据 [LICENSE](./LICENSE) 中的最终用户许可协议（EULA）发布——免费用于个人非商业用途，限制对安装包的再分发与逆向；源码的 MIT 权利不延伸至这些二进制产物
- **品牌素材**：Chobits 名称、Logo 与角色美术素材保留所有权利，商用需事先书面授权
