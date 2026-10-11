<div align="center">
	<img src="app/src/assets/chii-logo.webp" alt="Chii" width="120" height="120" />
	<h1>Chobits-Chii-Mascot-Release</h1>
	<p><b>ちぃ～</b> ちぃのクライアント配布ページとインストーラー配信</p>
	<p>Chobits デスクトップマスコットの公開リリースチャンネルです。本リポジトリは <b>Release 成果物</b>（インストーラーと自動更新メタデータ）をホストしており、<code>app/</code> はリリースページのソースコードで、<b>GitHub Actions</b> により自動ビルドされ、<b>GitHub Pages</b> にデプロイされます。サーバーおよびデータセキュリティ上の配慮により、Mascot クライアントのソースコードは現時点では公開しておりません。完全なセキュリティ評価を完了した後、公開を検討いたします。</p>
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

> 💖 このプロジェクトがお役に立ったら、ぜひ [GitHub](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release) で Star をお願いします —— あなたの応援が、ちぃをもっと多くの人に届けます！

> ⚠️ 注意：Chobits および登場キャラクターの著作権は CLAMP および関連権利者に帰属します。本リポジトリで配布するインストーラーは [LICENSE](./LICENSE) のエンドユーザーライセンス契約（EULA）に基づいて提供され、個人的な非商用利用に限定されます。再配布およびリバースエンジニアリングは禁止されています。

アニメ『ちょびっツ』(Chobits) に登場する **ちぃ (Chii)** をモデルにしたクライアントの配布ページ／インストーラー配信プロジェクトです。本リポジトリはデスクトップマスコットクライアント [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) のユーザー向けの配布窓口で、アプリ内の自動更新はここの Releases を参照し、配布ページのソースは `app/` にあります。ファミリー内の音声合成、人格チャット、音声認識、Live2D モデルは、それぞれ [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS)、[Chobits-Chii-LLM](https://github.com/Anime2Real/Chobits-Chii-LLM)、[Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR)、[Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) が担当します。

## 🌿 ブランチ一覧

| ブランチ | 位置づけ | 内容 |
| --- | --- | --- |
| [`main`](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/tree/main) | 唯一の内容ブランチ（デフォルト） | 配布ページのソース `app/` と本 README はこのブランチが基準で、GitHub Pages もこちらの `deploy.yml` からビルド／デプロイされます |
| `dependabot/*` | Dependabot による自動依存更新ブランチ | `.github/workflows/deploy.yml` または `app/package.json` / `app/package-lock.json` のみを変更し、README は分岐時点の古いスナップショットで独自内容はありません |

## ⬇️ ダウンロード

最新バージョンはリリースページからのダウンロードをおすすめします：

**https://anime2real.github.io/Chobits-Chii-Mascot-Release/**

ページではプラットフォーム別に最新のインストーラーを一覧表示します。[Releases](https://github.com/Anime2Real/Chobits-Chii-Mascot-Release/releases) ページから直接ダウンロードすることもできます：

| プラットフォーム | ファイル |
|---|---|
| macOS | `Chobits_<version>_darwin_arm64.dmg`（Apple Silicon）/ `Chobits_<version>_darwin_x64.dmg`（Intel） |
| Windows | `Chobits_<version>_win32_x64.exe`（NSIS インストーラー） |
| Linux | `Chobits_<version>_linux_x86_64.AppImage` / `Chobits_<version>_linux_amd64.deb` |

> macOS 版は Apple 公証済みです。Windows インストーラーはコード署名済みです（Certum）。SmartScreen に「Windows が PC を保護しました」と表示された場合は「詳細情報 → 実行」を選択してください（新しい証明書が評価を蓄積するにつれて表示されなくなります）。

アプリには自動更新機能が組み込まれているため、インストール後にこのページへ戻る必要はありません。

> **ちぃからのお知らせ (・ω・)ノ**：インストール後にアプリを起動すると、ちぃがデスクトップの片隅に暮らし始めます。

## ℹ️ 補足

- サーバーおよびデータセキュリティ上の配慮により、Mascot クライアントのソースコードは現時点では公開しておりません。完全なセキュリティ評価を完了した後、公開を検討いたします。本リポジトリはリリース成果物と自動更新メタデータを公開する場です
- 不具合の報告・フィードバックはアプリ内のチャンネルからお願いします

## 📄 ライセンス

- **ソースコード**：サーバーおよびデータセキュリティ上の配慮により、Mascot クライアントのソースコードは現時点では公開しておりません。完全なセキュリティ評価を完了した後、公開を検討いたします。それまでは、アプリおよびリリースページのソースコードはいかなるオープンソースライセンスでも公開されず、すべての権利が留保されます
- **バイナリ配布チャンネル**：本リポジトリの Releases にあるインストーラーと自動更新メタデータは [LICENSE](./LICENSE) のエンドユーザーライセンス契約（EULA）に基づいて提供されます——個人的かつ非商用目的で無償利用でき、インストーラーの再配布やリバースエンジニアリングは制限されます
- **ブランド素材**：Chobits の名称・ロゴ・キャラクターアートワークはすべての権利が留保されており、商用利用には事前の書面による許可が必要です

[LICENSE](./LICENSE) は Anime2Real が独自に作成したエンドユーザーライセンス契約（EULA、`Copyright (c) 2026 Anime2Real. All rights reserved.`）で、標準的なオープンソースライセンスではありません。上記の説明はこのファイルを基準とします。

## ⚠️ 免責事項

- 本プロジェクトは学術研究および個人の学習のみを目的としており、原作品の著作権について一切の主張を行いません。
- 本ソフトウェアで実装した機能や生成した内容を、原作品（CLAMP）および関連声優（田中理恵）の権益を侵害する用途に使用しないでください。
- 権利者からの要請があった場合、本プロジェクトは公開を取り下げます。

## 🙏 関連プロジェクト

- [Chobits-Chii-Mascot](https://github.com/Anime2Real/Chobits-Chii-Mascot) — ちぃのデスクトップマスコットクライアント（Electron、Live2D / スプライトの両レンダリング）
- [Chobits-Chii-Live2D](https://github.com/Anime2Real/Chobits-Chii-Live2D) — Live2D モデルとモーション生成
- [Chobits-Chii-TTS](https://github.com/Anime2Real/Chobits-Chii-TTS) — ちぃの声の TTS（GPT-SoVITS / CosyVoice の 2 方案）
- [Chobits-Chii-LLM](https://github.com/Anime2Real/Chobits-Chii-LLM) — ちぃの人格チャット / 翻訳サービス
- [Chobits-Chii-ASR](https://github.com/Anime2Real/Chobits-Chii-ASR) — 音声認識サービス（バッチ + ストリーミング）
- [Chobits-Chii-Pipecat](https://github.com/Anime2Real/Chobits-Chii-Pipecat) — リアルタイム音声会話の pipeline 編成
- [Chobits-Chii-Resource](https://github.com/Anime2Real/Chobits-Chii-Resource) — ファミリー共通のアセット
