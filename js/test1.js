//モーダルウィンドウのポップアップ＆クローズ

function addpopup() {
    var popup = document.getElementById('js-popup');
    if (!popup) return;
    popup.classList.add('is-show');

    var blackBg = document.getElementById('js-black-bg');
    var closeBtn = document.getElementById('js-close-btn');
    var saveBtn = document.getElementById('js-save-btn');


    closePopUp(blackBg);
    closePopUp(closeBtn);
    closePopUp(saveBtn);

    function closePopUp(elem) {
        if (!elem) return;
        elem.addEventListener('click', function () {
            popup.classList.remove('is-show');
        })
    }
}
