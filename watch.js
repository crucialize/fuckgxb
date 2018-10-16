/**
 * 坑1：想用JQuery?先在manifest.content_scripts.js中引入（建议别用，看坑4）
 * 坑2：官方文档：“不能访问web页面或其它content script中定义的函数和变量”
 * 坑3：script只能用.appendChild才能生效
 * 坑4：所有的对document的改变只能通过appendChild。innerHTML+=会有很多奇怪的错误。
 */

let scriptElement = document.createElement('script')

scriptElement.innerHTML = `

setInterval(function() {

    //防止跳转
    window.addEventListener('ended', function (event) {
        event.stopPropagation();
    }, true);

    try {

        //ensure has video
        if(document.getElementsByTagName('video').length==0){
            return;
        }

        let src17="http://localhost:3000"

        let video00=document.getElementsByTagName('video')[0]

        if(video00.hasAttribute('crossorigin')){
            video00.removeAttribute('crossorigin')
        }

        if(video00.src.indexOf("localhost")<0){
            video00.src=src17
        }

        try{
            video00.pause = function () { }//disable video.pause
            video00.play()
        }catch(e92){}
        
        let progress=$('.video-percent').text()
        $('title').text(progress+"%")
        
    } catch(e82){
        console.log(e82)
    }
}, 200)

//close shit dialog
setInterval(()=>{
    $(".gxb-dialog-close").click()
},200)

`

document.body.appendChild(scriptElement)