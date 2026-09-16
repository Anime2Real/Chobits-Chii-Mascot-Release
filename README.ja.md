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
| macOS | `Chobits_<version>_darwin_arm64.dmg`（Apple Silicon）/ `Chobits_<version>_darwin_x64.dmg`（Intel） |
| Windows | `Chobits_<version>_win32_x64.exe`（NSIS インストーラー） |
| Linux | `Chobits_<version>_linux_x86_64.AppImage` / `Chobits_<version>_linux_amd64.deb` |

> macOS 版は Apple 公証済みです。Windows インストーラーはコード署名済みです（Certum）。SmartScreen に「Windows が PC を保護しました」と表示された場合は「詳細情報 → 実行」を選択してください（新しい証明書が評価を蓄積するにつれて表示されなくなります）。

アプリには自動更新機能が組み込まれているため、インストール後にこのページへ戻る必要はありません。

## 補足

- アプリのソースコードは MIT ライセンスでオープンソースです：[Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot)。本リポジトリはリリース成果物と自動更新メタデータを公開する場であり、`app/` のリリースページソースも同じく MIT ライセンスです
- 不具合の報告・フィードバックはアプリ内のチャンネルからお願いします

## ライセンス

- **ソースコード**：アプリおよびリリースページのソースは [MIT ライセンス](https://github.com/Anime2Real/Chobits-Chii-Mascot/blob/main/LICENSE) で公開されており、閲覧・改変・再配布が自由にできます
- **バイナリ配布チャンネル**：本リポジトリの Releases にあるインストーラーと自動更新メタデータは [LICENSE](./LICENSE) のエンドユーザーライセンス契約（EULA）に基づいて提供されます——個人的かつ非商用目的で無償利用でき、インストーラーの再配布やリバースエンジニアリングは制限されます。ソースコードに対する MIT ライセンスの権利はこれらのバイナリ成果物には及びません
- **ブランド素材**：Chobits の名称・ロゴ・キャラクターアートワークはすべての権利が留保されており、商用利用には事前の書面による許可が必要です
