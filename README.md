# Chobits-Chii-Mascot-Release

Chobits 桌宠的公开发布渠道。本仓库承载 Release 产物（安装包与自动更新元数据），应用源码在私有仓库；`app/` 为发布主页的页面源码，由 GitHub Actions 自动构建并部署到 GitHub Pages。

## 下载

前往发布主页下载最新版本（推荐）：

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

页面会自动识别你的平台并推荐对应的安装包，也可以直接访问 [Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) 页面下载：

| 平台 | 文件 |
|---|---|
| macOS | `Chobits_<version>_mac_arm64.dmg`（Apple Silicon）/ `Chobits_<version>_mac_x64.dmg`（Intel） |
| Windows | `Chobits_<version>_win_x64.exe`（NSIS 安装包） |
| Linux | `Chobits_<version>_linux_x64.AppImage` / `.deb` |

> macOS 版本已经过 Apple 公证；Windows 版本暂未做代码签名，SmartScreen 拦截时请选择「更多信息 → 仍要运行」。

应用内置自动更新，安装后无需手动回到本页。

## 说明

- 源码仓库为私有仓库，本仓库仅用于公开发布
- 问题反馈请通过应用内渠道进行
