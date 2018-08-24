let flag = false;

function __get_flag(){
    return flag
}

function __set_flag(val){
    flag=val
}

setInterval(() => {

    chrome.windows.getAll({ populate: true }, function (windows) {
        windows.forEach(function (window) {
            window.tabs.forEach(function (tab) {

                if (tab.title == "100%") {
                    if (flag)
                        chrome.tabs.remove(tab.id)
                }
            });
        });
    });

}, 1000)