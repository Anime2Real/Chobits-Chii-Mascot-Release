# Chobits 发布主页（app/）

Chobits 桌宠发布主页的页面源码（React + TypeScript + Vite），部署于 GitHub Pages：

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

页面从 GitHub Releases API 读取最新版本与下载资产，按平台展示安装包。

## 本地开发

```bash
npm ci
npm run dev
```

开发服务器默认运行在 http://localhost:3000（端口见 `vite.config.ts`）。

## 构建与部署

```bash
npm run build
```

产物输出到 `app/dist`。推送到 `main` 分支后，由 `.github/workflows/deploy.yml` 自动构建并部署到 GitHub Pages，无需手动操作。

## 目录结构

- `src/sections/` — 页面各区块（Hero、Features、Download 等）
- `src/components/` — 通用组件
- `src/i18n.tsx` — zh / ja / en 三语文案与语言切换
- `public/` — 静态资源（背景音乐等）

## 版本号约定

本仓库存在两套互不影响的版本号：

- **Git tags / Releases（v1.2.2 等）**：跟踪的是闭源 **Mascot 客户端**的版本，每次客户端发版都会打 tag 并上传安装包。发布页通过 GitHub Releases API 读取这些信息，**无需任何改动**即可展示新版本。
- **`app/package.json` 的 `version`**：仅表示**发布页自身**的版本，只在页面内容或代码发生实质变更时才需要递增。

因此客户端发版（打新 tag）时**不需要**同步修改 `app/package.json` 的 `version`，两者出现不一致是正常现象。
