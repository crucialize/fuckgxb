let bg = chrome.extension.getBackgroundPage()

$(document).ready(() => {

    $("#t")[0].checked = bg.__get_flag()

    $("#t").change(function () {
        bg.__set_flag(this.checked)
    })

    $("#I").click(function () {
        window.open("https://github.com/crucialize/fuckgxb")
    })

})
