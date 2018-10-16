let bg = chrome.extension.getBackgroundPage()

$(document).ready(() => {

    $("#t")[0].checked = bg.__get_flag()

    $("#t").change(function () {
        bg.__set_flag(this.checked)
    })

    $("#I").click(function () {
        window.open("https://github.com/crucialize/fuckgxb")
    })

    setInterval(() => {

        chrome.tabs.query({ active: true }, function (tab) {
    
            var pageUrl = tab[0].url;
            if (pageUrl.indexOf("#!state=chapter&chapterId=") > 0) {
                $("#next").attr("disabled", false);
            }
            else {
                $("#next").attr("disabled", true);
            }
        });
    }, 200)
    
    $("#next").click(function () {
    
        chrome.tabs.query({ active: true }, function (tab) {
    
            var pageUrl = tab[0].url;
    
            var r = /\/([0-9]+)#!state=chapter&chapterId=([0-9]+)/
    
            var m = pageUrl.match(r)
    
            var prvNum = m[1]
            var p0 = parseInt(prvNum) + 1
            var newNum = (p0).toString()
    
            var newPageUrl = pageUrl.replace(new RegExp(prvNum, "g"), newNum)
    
            window.open(newPageUrl)
        });
    })

})
