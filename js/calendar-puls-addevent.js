document.getElementById("addevent_check").onclick = function () {

    console.log('チェック通過');

    var modal_title = document.getElementById('addevent_title').value;
    var modal_start_time = document.getElementById('addevent_start_time').value;
    var modal_end_time = document.getElementById('addevent_end_time').value;

    //modal_start_time = getStringFromDate(modal_start_time);
    //modal_end_time = getStringFromDate(modal_end_time);

    //console.log(modal_start_time);
    //console.log(modal_end_time);


    if (modal_title) {
        //if (!modal_title || !modal_start_time || !modal_end_time) {

        console.log('NotNULLクリア');

        //日付の書式変換
        //modal_start_time = getStringFromDate(modal_start_time);
        //modal_end_time = getStringFromDate(modal_end_time);

        console.log(modal_start_time);
        console.log(modal_end_time);

        var uuid = getUniqueStr();
        console.log(uuid);

        calendar.addEvent({
            id: uuid,
            title: modal_title,
            start: modal_start_time,
            end: modal_end_time,
            //allDay: arg.allDay
        })


    } else {
        // null か空文字なら false と判定してくれる
        console.log('空欄な箇所が存在していた為、処理が正常に行われませんでした。');

    }





    //JSON編集用にサーバーへデータ送信
    var sendtext = '[' + uuid + modal_title + modal_start_time + modal_end_time + ']'

    //postForm(sendtext);




    /*
    post();
    

    xhr = new XMLHttpRequest();

    // サーバからのデータ受信を行った際の動作
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var answer = document.getElementById('answer');
                answer.value = xhr.responseText;
            }
        }
    };

    // 計算ボタンを押した際の動作
    function post() {
        xhr.open('POST', 'calc.php', true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        // フォームに入力した値をリクエストとして設定
        var request = "arg1=" + arg1.value + "&arg2=" + arg2.value;
        xhr.send(request);
    }
    */





}

//現在の日付を反映させる
window.onload = function () {
    //今日の日時を表示
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var toTwoDigits = function (num, digit) {
        num += ''
        if (num.length < digit) {
            num = '0' + num
        }
        return num
    }

    var yyyy = toTwoDigits(year, 4)
    var mm = toTwoDigits(month, 2)
    var dd = toTwoDigits(day, 2)
    var ymd = yyyy + "-" + mm + "-" + dd;

    document.getElementById("addevent_start_time").value = ymd;
    document.getElementById("addevent_end_time").value = ymd;
}


//日付から文字列に変換する関数
function getStringFromDate(date) {

    var year_str = date.getFullYear();
    //月だけ+1すること
    var month_str = 1 + date.getMonth();
    var day_str = date.getDate();
    var hour_str = date.getHours();
    var minute_str = date.getMinutes();
    var second_str = date.getSeconds();

    month_str = ('0' + month_str).slice(-2);
    day_str = ('0' + day_str).slice(-2);
    hour_str = ('0' + hour_str).slice(-2);
    minute_str = ('0' + minute_str).slice(-2);
    second_str = ('0' + second_str).slice(-2);

    format_str = 'YYYY-MM-DD hh:mm:ss';
    format_str = format_str.replace(/YYYY/g, year_str);
    format_str = format_str.replace(/MM/g, month_str);
    format_str = format_str.replace(/DD/g, day_str);
    format_str = format_str.replace(/hh/g, hour_str);
    format_str = format_str.replace(/mm/g, minute_str);
    format_str = format_str.replace(/ss/g, second_str);

    return format_str;
};

document.getElementById("event-reflection").onclick = function () {
    let nowEvent;

    /*
    nowEvent = calendar.getEvents()
    console.log(nowEvent);
    */

    var events = calendar.getEvents();
    for (var i = 0; i < events.length; i++) {
        //alert(events[i].title + "..." + events[i].start);
        console.log(events[i].title + "..." + events[i].id + "..." + events[i].start);
    }
    console.log(events);

}

//なんちゃってUUIDの生成
//参考：https://qiita.com/coa00/items/679b0b5c7c468698d53f
function getUniqueStr(myStrong) {
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16) + Math.floor(strong * Math.random()).toString(16)
}


document.getElementById("event-RandomNumber").onclick = function () {
    var uuid = getUniqueStr();
    console.log(uuid);
}

document.getElementById("event-http-post-test").onclick = function () {
    var test1 = 'test'
    var test2 = 'てすと'
    var test3 = 'テスト'
    //postForm(test1);
    //postForm(test1, test2, test3);
    console.log('http-POSTのテストを実行しました。')
    
    /*
    < 現状 >
    ・フォームで入力させた値を抽出
    ・未入力がないかチェックをした後、イベントの追加処理
    ・同時にサーバーへhttpPOSTでデータを送信
    ・データの送信については、フォームの形を取っている。
    
    < 課題 >
    ・フォームとしてデータをPOSTすると、画面が遷移してしまう
    ・遷移する画面の内容 → "post received"
    
    <残作業>
    ・完成予想図
    https://drive.google.com/file/d/1dMjMfh61yP1aBUZtnZbYl5PdlEixmWUc/view
    ・node.jsで行う予定だった左側のコーディングは未着手。
    ・配列←→JSON文字列化について
    https://cpoint-lab.co.jp/article/201801/1228/
    ・Node.jsでJSONファイルを読み込む
    https://qiita.com/ikasumi_wt/items/bc562597722e3dc3f532
    
    */
    
}

//参考：https://www.sejuku.net/blog/53627
//formとして送信したい値を引数として渡す
function postForm(value) {

    var form = document.createElement('form');
    var request = document.createElement('input'); //①

    form.method = 'POST';
    //ToDo：form用のURLに変更
    form.action = ' http://127.0.0.1:3000';

    //  ｜→①
    request.type = 'hidden'; //入力フォームが表示されないように
    request.name = 'text';
    request.value = value;
    form.appendChild(request);
    //  ①←｜


    document.body.appendChild(form);

    form.submit();

}

function postForm(value1, value2, value3) {

    var form = document.createElement('form');
    var request1 = document.createElement('input'); //①
    var request2 = document.createElement('input'); //②
    var request3 = document.createElement('input'); //③

    form.method = 'POST';
    //ToDo：form用のURLに変更
    form.action = ' http://127.0.0.1:3000';

    //  ｜→①
    request1.type = 'hidden'; //入力フォームが表示されないように
    request1.name = 'text';
    request1.value = value1;
    form.appendChild(request1);
    //  ①←｜
    //  ｜→②
    request2.type = 'hidden'; //入力フォームが表示されないように
    request2.name = 'text';
    request2.value = value2;
    form.appendChild(request2);
    //  ②←｜
    //  ｜→③
    request3.type = 'hidden'; //入力フォームが表示されないように
    request3.name = 'text';
    request3.value = value3;
    form.appendChild(request3);
    //  ③←｜


    document.body.appendChild(form);

    form.submit();

}

