# Chobits-Chii-Mascot-Release

[简体中文](./README.md) ｜ [日本語](./README.ja.md) ｜ [English](./README.en.md)

[![GitHub Release](https://img.shields.io/github/v/release/Anime2Real/Chobits-Chii-Mascot-Release)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases)
[![Downloads](https://img.shields.io/github/downloads/Anime2Real/Chobits-Chii-Mascot-Release/total)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases)
[![Deploy to GitHub Pages](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml/badge.svg)](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/actions/workflows/deploy.yml)
![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey)

Chobits デスクトップマスコットの公開リリースチャンネルです。本リポジトリは Release 成果物（インストーラーと自動更新メタデータ）をホストしており、アプリのソースコードはプライベートリポジトリにあります。`app/` はリリースページのソースコードで、GitHub Actions により自動ビルドされ、GitHub Pages にデプロイされます。

## ダウンロード

最新バージョンはリリースページからのダウンロードをおすすめします：

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

ページが自動的にプラットフォームを判別して対応するインストーラーを推奨します。[Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) ページから直接ダウンロードすることもできます：

| プラットフォーム | ファイル |
|---|---|
| macOS | `Chobits_<version>_mac_arm64.dmg`（Apple Silicon）/ `Chobits_<version>_mac_x64.dmg`（Intel） |
| Windows | `Chobits_<version>_win_x64.exe`（NSIS インストーラー） |
| Linux | `Chobits_<version>_linux_x64.AppImage` / `.deb` |

> macOS 版は Apple 公証済みです。Windows 版はまだコード署名を行っていないため、SmartScreen にブロックされた場合は「詳細情報 → 実行」を選択してください。

アプリには自動更新機能が組み込まれているため、インストール後にこのページへ戻る必要はありません。

## 補足

- ソースコードのリポジトリはプライベートであり、本リポジトリは公開リリース専用です
- 不具合の報告・フィードバックはアプリ内のチャンネルからお願いします

## ソースコードを非公開にしている理由

Chobits-Chii-Mascot のソースコードは現在非公開としています。主な理由は、本ソフトウェアの利用データの安全を確保するためです。プロジェクトに重大なリスクとなる脆弱性がないことを確認するまでソースコードを非公開とし、潜在的なセキュリティ問題が悪用されることを防ぎます。十分なセキュリティ審査と検証が完了した後、オープンソース化の計画を改めて検討します。
