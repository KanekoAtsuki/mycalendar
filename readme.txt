Fullcalendarについて

ざっくり説明：jQueryのアドオン的なやつ。
参考サイト：https://qiita.com/imp555sti/items/ee9809768f6dc9439ab5
公式サイト：https://fullcalendar.io/

金子が考える仕様（実装したい機能）
①日本語化
②祝日の設定（とりあえず2020-21年だけでも）
③予定の表示＆カレンダー上の日付クリックで予定登録
④月、週、日、リスト表示の実装（切替ボタン含む）
⑤DBから予定参照（NoSQL-JSON）
⑥予定登録時JSONの編集＆DBへのPOST


以下備忘録

＜---2020.08.04.20.00----
[重要]ファイルの構成を一新しました。（旧ファイル群は"old"フォルダに入れました）
理由：nodeのインストールが絡むと結合が怠いので、古いバージョン(具体的には4.3.1)を採用しました。
また、ファイル一新につき通信関係のファイルも無くなったので悪しからず。（とりあえず後回し）

現在開発フォルダ
│
│　css
│　└calendar-core.css
│　└calendar-daygrid.css
│　└calendar-list.css
│　└calendar-timegrid.css
│　js
│　└calendar-core.js
│　└calendar-daygrid.js
│　└calendar-interaction.js
│　└calendar-list.js
│　└calendar-locales-all.js
│　└calendar-timegrid.js
│　old
│　└旧開発フォルダ
│　calendar-my.html
│　readme.txt
└

----2020.08.04.20.00---＞

＜---2020.07.31.10.00----
htmlファイルを２つ追加、俺の実装用で追加したやつなのであまり関係ない。
php*2&js*1ファイルを追加、使うか分からないけど公式のsampleファイルにあったので一応持ってきた。
"金子が考える仕様（実装したい機能）"を作成。
大きな仕様変更としてはDB周り、NoSQL(定義とかよく知らんけど)実装予定。
①ユーザー１人につきjsonファイル１つ用意。
②カレンダー表示時DBからjsonGET。
③予定追加時、jsonを編集してDBへjsonPOST。
④DBはPOSTされたjsonを上書きor置換。
┌処理の流れ
│
│フロント：カレンダーの表示
│フロント：jsonのGETリクエスト
│バック：jsonを投げる
│フロント：jsonを基に予定をカレンダーに反映
│フロント：予定の追加（ユーザーに入力させる）
│フロント：jsonの編集
│フロント：jsonのPOST
│バック：jsonの上書きor置換
│
└
----2020.07.31.10.00---＞

＜---2020.07.30.11.30----
qiitaの記事に4.3.1がDLできるURLがあるが、開発は現在最新の5.1.0を採用。
"fullcalendar-scheduler"もあるがpremiere的な表記があったので念の為"fullcalendar"を採用。
examplesフォルダの中に多くのサンプルがある中で、json形式でスケジュールデータを鯖から引っ張ってこれそうなものを採用。
スケジュールデータのjson記入方式については、jsonファイル参照。
jsonを引っ張ってくるであろうphpについてはよく分からんのでノータッチ状態。

現在開発フォルダ
│
│　node_modules（公式サイト参照）
│　src
│　└css
│　　└main.css
│　└js
│　　└ja.js
│　　└main.js
│　└php
│　　└get-events.php
│　└events.json
│　└json.html
│　└readme.txt
│　package-lock.json（公式サイト参照）
│
└

----2020.07.30.11.30---＞





