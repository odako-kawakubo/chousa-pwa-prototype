# 調査システムPWA Prototype v0.13.1

## v0.13.1 電子看板カメラ統合 第1段階

- `camera.html` を電子看板カメラ v54 ベースへ更新
- 調査システムから渡した案件名・住所・部屋・試料情報を看板へ初期反映
- 調査は青、サンプリングは緑で起動
- サンプリング時は採取場所・試料No.・既定ステータスを反映
- 左上の「調査システム」から写真タブへ復帰
- v54の看板編集、増減、横向き表示、ダブルタップ拡大を維持
- この版ではOneDrive / Firestoreへの撮影保存接続は未実装（次段階）

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


## v0.12.2f
写真タブにMicrosoftログアウトボタンを追加。管理者アカウントで入ってしまった場合、ログアウト後に保存したいMicrosoftアカウントでログインし直す。


## v0.12.2f 追記：写真選択削除
- 写真サムネの個別×削除ではなく、各写真ブロック内で「選択」→複数サムネ選択→「削除」の流れに変更。
- 「選択」「削除」は各ブロックのカメラ起動ボタンの上に配置。
- 削除時はOneDrive本体削除を試行し、Firestore側は deleted=true に更新する。
- OneDrive削除失敗時は確認後にアプリ上の写真カードだけ削除可能。


## v0.13.1
電子看板カメラからOneDrive/Firestoreへ写真保存し、materialRecords.photoRefsへ紐付けます。
