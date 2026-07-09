# 調査システムPWA Prototype v0.12.1

v0.11.2の既存UIを維持したまま、v0.12.0でFirestore materialRecords同期を差し込み、v0.12.1で写真共有テストを追加した版です。

## 主な内容

- 仕上表UIは維持
- 建材リストUIは維持
- camera.html は残置
- Firestore materialRecords同期
- Firestore photos同期
- Firebase Storage 仮運用による写真本体共有
- 写真タブで「写真選択/共有」から撮影・画像選択
- 写真メタを `projects/{projectId}/photos/{photoId}` に保存
- `materialRecords/{materialId}.photoRefs` へ写真IDを紐付け

## 今回の写真方針

```text
Firestore = 写真メタ・紐付け正本
Firebase Storage = 仮の写真本体置き場
SharePoint = 将来の本番写真保存先
```

将来SharePoint連携に切り替えるときは、写真アップロード先だけを差し替え、Firestore photoRecordには `sharePointUrl` を保存する想定です。

## テスト前に必要なこと

Firebase Consoleで Storage を有効化してください。

テスト中だけのStorageルール例：

```js
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

Firestoreルールもテスト中は読み書き可能にしてください。

## 開き方

Live Serverで `app.html` を開きます。

iPad / iPhone からはPCのIPに置換して開きます。

```text
PC:      http://127.0.0.1:5500/app.html?v=121
iPad等:  http://192.168.1.46:5500/app.html?v=121
```
