# 調査システムPWA Prototype v0.12.2e

## 内容

v0.12.2cからの修正版です。

- 既存UI維持
- Firebase materialRecords同期維持
- Microsoftログイン維持
- 写真本体はOneDriveへアップロード
- 写真メタはFirestoreへ保存
- OneDrive保存先は「調査システムPWAテスト写真」
- v0.12.2eではフォルダ名検索で取得したfolder itemIdに対してアップロードします

## ローカル確認URL

```text
http://localhost:5500/app.html?v=122d
```

## 注意

Microsoft Entra IDのリダイレクトURIに `http://localhost:5500/app.html` が必要です。
GitHub Pagesで使う場合は Pages の app.html URL も追加してください。
