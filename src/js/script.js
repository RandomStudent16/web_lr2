window.addEventListener("DOMContentLoaded", (event) => {
    const btnEl = document.getElementById('#btn')
    btnEl.addEventListener('click', toasting)
    function toasting() {
        let myAlert = document.querySelector('.toast');
        let bsAlert = new bootstrap.Toast(myAlert);
        setTimeout(
            bsAlert.show()
            , 1000)
    }

    var currentModal = 0;
    var textInWindow = ["1. 先生に「本当に日本語で書けるんだ」と思ってもらえるように、どんな文章でもいいので、まだ意識的な情報を出すほど必死ではないのですが、教えてください。" +
        `  <a href='#' data-bs-toggle="popover" title="タイトル" data-bs-content="なにもない">ヒント</a>`
        ,
    "2.そうですね、どれも全く同じになりますね、でもそれがあの文字のいいところなんですよ、とても面白いんですよ、何もわからないんですから " +
    ` <a href='#' data-bs-toggle="popover" title="タイトル" data-bs-content="なにもない">ヒント</a>`
        ,
    "3.グッジョブです。" +
    `<a href='#' data-bs-toggle="popover" title="タイトル" data-bs-content="なにもない">ヒント</a>`
        ,
    "4.実は、最初のラボは他の人の助けを借りて作ったもので、私の貢献度は10％以下です。" +
    `<a href='#' data-bs-toggle="popover" title="タイトル" data-bs-content="なにもない">ヒント</a>`
        ,
    "5. ミーシャもう一回来てください、まずいです" +
    `<a href='#' data-bs-toggle="popover" title="タイトル" data-bs-content="なにもない">ヒント</a>`
    ]

    var modalCount = textInWindow.length;
    function Information(i) {
        if (i >= 0) i = i % modalCount;
        else i = modalCount - 1;
        var modalParagraph = exampleModal.querySelector('.modal-body');
        let text = textInWindow[i];
        modalParagraph.innerHTML = text
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
        currentModal = i;
    }
    exampleModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget
        let num = button.getAttribute('data-bs-num')
        Information(num);
    });

    exampleModal.addEventListener("keydown", event => {
        if (event.code === "ArrowLeft") {
            Information(currentModal - 1);
        } else if (event.code === "ArrowRight") {
            Information(currentModal + 1);
        } else if (event.key === "Escape") {
            event.preventDefault()

        }
    });
})
