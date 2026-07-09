# 調査システムPWA Prototype v0.12.0 Firebase UI維持版

この版は、送付ZIPの v0.11.2 をベースに、仕上表UIを作り替えずに Firebase Firestore 同期層を差し込んだ版です。

## 使い方
1. GitHub PagesまたはLive Serverで `app.html` を開く
2. 初回表示時に端末名を入力
3. 現在の案件番号を Firestore projectId として `projects/{案件番号}/materialRecords` を購読
4. PC/iPadで同じ案件を開いて、仕上表・建材リスト編集を確認

## Firestore
Firebase configは `survey-pwa-test` のものを組み込み済みです。

データパス例：

```text
projects/26070101/materialRecords/R001
```

## 構成
- `index.html`
- `app.html`
- `camera.html`
- `version.json`
- `CHANGELOG_v0.12.0.txt`
- `.nojekyll`
- `.gitattributes`

## 注意
Firestoreルールがテストモードの場合、公開運用はしないでください。
