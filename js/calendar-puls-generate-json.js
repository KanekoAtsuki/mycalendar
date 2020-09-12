//参考：https://qiita.com/banaoh/items/4119c0e23053b1cfa80b

document.getElementById("event-events").onclick = function () {
    //var fs = require('fs');
    var formatCSV = '';
    var testArr = [
  [0.018317, -0.019618, -0.011231, 0.999577],
  [0.018395, -0.019801, -0.011154, 0.999573],
  [0.018559, -0.019742, -0.01115, 0.999571]
];
    var testEvents1 = [
        ['"title": "Long Event"', '"start": "2020-08-08"', '"end": "2020-08-10"'],
        ['"title": "Meeting"', '"start": "2020-08-12"', '"end": "2020-08-12"'],
        ['"title": "Birthday Party"', '"start": "2020-08-13"']
    ];
    var testEvents2 = [
        ["1", "Long Event", "2020-08-08", "2020-08-10"],
        ["2", "Meeting", "2020-08-12", "2020-08-12"]
    ];

    var testEvents3 = [
        ["3", "Birthday Party", "2020-08-010", "2020-08-10"]
    ];

    //exportCSV(testArr, formatCSV);
    //exportCSV(testArr);
    //exportCSV(testEvents1, formatCSV);
    testExportCSV(testEvents2, formatCSV);
    testExportCSV(testEvents3, formatCSV);


}

// 配列をcsvで保存するfunction
function exportCSV(content) {
    for (var i = 0; i < content.length; i++) {
        var value = content[i];

        for (var j = 0; j < value.length; j++) {
            var innerValue = value[j] === null ? '' : value[j].toString();
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                formatCSV += ',';
            formatCSV += result;
        }
        formatCSV += '\n';
    }
    /*
    fs.writeFile('formList.csv', formatCSV, 'utf8', function (err) {
        if (err) {
            console.log('保存できませんでした');
        } else {
            console.log('保存できました');
        }
    });
    */
}

/*test*/
function exportCSV(content, formatCSV) {
    console.log('exportCSV:in');
    for (var i = 0; i < content.length; i++) {
        console.log('for1:in');
        var value = content[i];
        formatCSV += '{';

        for (var j = 0; j < value.length; j++) {
            console.log('for2:in');
            var innerValue = value[j] === null ? '' : value[j].toString();
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                formatCSV += ',';
            formatCSV += result;
            console.log('for2:out');
        }
        formatCSV += '}';
        formatCSV += '\n';
        console.log('for1:out');
    }
    console.log('exportCSV:out');
    console.log(formatCSV);
}


function testExportCSV(content, formatCSV) {
    console.log('exportCSV:in');
    var attribute = ['"id": ', '"title": ', '"start": ', '"end": ']; //test
    for (var i = 0; i < content.length; i++) {
        console.log('for1:in');
        var value = content[i];
        formatCSV += '{';

        for (var j = 0; j < value.length; j++) {
            console.log('for2:in');
            var attribute_text = attribute[j].toString();
            var innerValue = value[j] === null ? '' : value[j].toString();
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                formatCSV += ',';
            formatCSV += attribute_text;
            formatCSV += '"' + result + '"';
            console.log('for2:out');
        }

        formatCSV += '}';
        formatCSV += '\n';
        console.log('for1:out');
    }
    console.log('exportCSV:out');
    console.log(formatCSV);
}



//JSON→配列
document.getElementById("event-parse").onclick = function () {
    var json_text = '[{"title": "All Day Event","start": "2020-08-01"},{"title": "Long Event","start": "2020-08-08","end": "2020-08-10"},{"id": "999","title": "Repeating Event","start": "2020-08-09"}]';
    var arr = JSON.parse(json_text);

    console.log(json_text);
    console.log(arr);
}
