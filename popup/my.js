$(document).ready(() => {

    //query and update state
    setInterval(() => {
        try {
            let bg = chrome.extension.getBackgroundPage()
            let flag = bg.__get_flag()

            $('#t').text("关闭已经完成的：" + flag.toString())
        } catch (e86) { }
    }, 200)

    //button: toggle flag
    $('#t').click(() => {
        let bg = chrome.extension.getBackgroundPage()
        let flag = bg.__get_flag()
        if (flag == true)
            bg.__set_flag(false)
        else
            bg.__set_flag(true)
    })

})
