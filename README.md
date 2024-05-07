## Setup
```
cp .env.example .env.local
```
.env.localにRESAS APIを追加する。
```
docker compose build
docker compose up -d
```
## TODO
- [x] RESAS(地域経済分析システム) APIの「都道府県一覧」APIから取得する
- [x] APIレスポンスから都道府県一覧のチェックボックスを動的に生成する
- [x] 都道府県にチェックを入れると、RESAS APIから選択された都道府県の「人口構成」を取得する
- [x] 人口構成APIレスポンスから、X軸:年、Y軸:人口数の折れ線グラフを動的に生成して表示する

- [ ] グラフの細かなUIを改善する
- [ ] 読み込み時のアニメーションorスケルトンを実装する
- [ ] リファクタリング

## 課題の取り組み開始から完了までに要した合計時間
約2日