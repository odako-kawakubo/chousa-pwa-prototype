# 調査システムPWA Prototype v0.12.2aa SharePoint写真

v0.11.2のUIを維持し、v0.12.0のFirebase materialRecords同期に加えて、写真本体をSharePoint/OneDriveへアップロードする試作版です。

## 保存先

- 写真本体: OneDrive / SharePoint フォルダ「調査システムPWAテスト写真」
- 写真メタ: Firestore `projects/{projectId}/photos/{photoId}`
- 建材との紐付け: Firestore `projects/{projectId}/materialRecords/{materialId}.photoRefs`

## Microsoft設定

- clientId: `f7074fad-6ea0-467b-98db-e308f01950cc`
- tenantId: `538265b8-8d15-49ef-9d51-ca252954de1d`
- ローカルテスト用リダイレクトURI: `http://localhost:5500/app.html`

## 起動

PCでは Live Server で以下を開いてください。

`http://localhost:5500/app.html?v=122`

写真タブで「Microsoftログイン」→「写真選択/共有」の順に確認します。

## 注意

iPad/iPhoneからMicrosoftログインする場合、Entra IDアプリ登録のSPAリダイレクトURIに、実際に開くURLを追加してください。例:

`http://192.168.1.46:5500/app.html`

GitHub Pagesで使う場合も、そのURLを追加してください。


## v0.12.2a 修正
- Microsoftログイン用 MSAL.js のCDN読込にフォールバックを追加。
- `alcdn.msauth.net` がブロックされる環境でも `jsdelivr` から読みに行くように変更。
