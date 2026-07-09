# 調査システムPWA v0.12.0 UI維持版

このZIPは、Firebase正本化ZIPで仕上表UIが大きく変わってしまったため、いったん既存プロトタイプのUIを維持するための戻し用です。

## 方針

- app.html の仕上表UIは元プロトタイプのまま維持
- camera.html は残す
- 調査図モックは含めない
- Firebase本体統合は、このUIを崩さずに差し込み直す前提

## 含まれるファイル

- index.html
- app.html
- camera.html
- version.json
- README.md
- CHANGELOG_v0.12.0_UI_KEEP.txt
- .nojekyll
- .gitattributes

## 注意

この版は「仕上表を変えない」ことを優先した戻し版です。
Firestore同期層はまだ本体 app.html には差し込んでいません。
次にやる場合は、仕上表のHTML/CSS/描画処理を触らず、materialRecordsのデータ層だけを差し込む方針で進めます。
