/**
 * 坑1：想用JQuery?先在manifest.content_scripts.js中引入（建议别用，看坑4）
 * 坑2：官方文档：“不能访问web页面或其它content script中定义的函数和变量”
 * 坑3：script只能用.appendChild才能生效
 * 坑4：所有的对document的改变只能通过appendChild。innerHTML+=会有很多奇怪的错误。
 */

let scriptElement=document.createElement('script')

scriptElement.innerHTML=`

setInterval(function() {

    try {

        //ensure it is video page && video loaded
        if(document.getElementsByTagName('video').length==0){
            return;
        }

        try{
            let video00=document.getElementsByTagName('video')[0];
            video00.pause = function () { }//disable video.pause
            video00.play()
        }catch(e92){}
        
        let progress=$('.video-percent').text()
        $('title').text(progress+"%")
        
    } catch(e82){
        console.log(e82)
    }
}, 1000)

///

buttonAdded=true

function func97(){
    let url00=document.URL
    url00=url00.substring(0,url00.indexOf("#"))
    let strNum00=url00.substring(url00.lastIndexOf('/')+1)
    let Num00=parseInt(strNum00)
    let strNum01=(Num00+1).toString()
    let url01=url00.replace(strNum00,strNum01)
    window.open(url01)
}

`

document.body.appendChild(scriptElement)

//add button

let btnElem=document.createElement('div')
btnElem.innerHTML=`

<div style="z-index:6324;position:absolute;top:0;left:0;">
<button onclick="func97()">下一个视频</button>
</div>

`
document.body.appendChild(btnElem)