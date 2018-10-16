let flag = false;

function __get_flag() {
    return flag
}

function __set_flag(val) {
    flag = val
}

setInterval(() => {

    chrome.windows.getAll({ populate: true }, function (windows) {
        windows.forEach(function (window) {
            window.tabs.forEach(function (tab) {
                try {
                    if (parseFloat(tab.title) > 0.95) {
                        if (flag)
                            chrome.tabs.remove(tab.id)
                    }
                } catch (exc) { }
            });
        });
    });

}, 500)