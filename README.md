# 調査システムPWA v0.12.0 Firebase正本化版

旧プロトタイプを全置換しやすいように、不要な `.git`、旧 `camera.html`、旧テストHTML、重い調査図mockは省いた最小構成です。

## ファイル

- `index.html`：`app.html`へ転送
- `app.html`：本体
- `version.json`：バージョン確認用
- `.nojekyll`：GitHub Pages用
- `CHANGELOG_v0.12.0.txt`：変更点

## 使い方

1. ZIPの中身をGitHub Pages用リポジトリ直下へ上書き
2. VS Code Live Server または GitHub Pagesで `app.html` を開く
3. 端末名を入力
4. 案件ID `26000001` のまま「接続」
5. 必要なら「サンプル作成」

## 注意

Firebase Firestoreは `survey-pwa-test` に接続する設定が入っています。現在のFirestoreルールがテストモードの場合、公開運用には使わないでください。
