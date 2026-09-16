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
- `src/components/` — 通用组件（含 `ui/` 下的 shadcn 组件）
- `src/i18n.tsx` — zh / ja / en 三语文案与语言切换
- `public/` — 静态资源（背景音乐等）
