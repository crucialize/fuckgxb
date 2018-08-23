/**
 * 坑1：想用JQuery?先在manifest.content_scripts.js中引入
 * 坑2：操作元素会有隐藏bug（disable video.pause），
 * 所以只能附加到html里
 * 
 */
console.log("in extension")

var scriptElement=document.createElement('script')

scriptElement.innerHTML=`
setInterval(function() {

    try {

        document.getElementsByTagName('title')[0].innerHTML="Working"
        document.getElementsByTagName('video')[0].pause = function () { }//disable video.pause
        document.getElementsByTagName('video')[0].play();


    } catch(e82){
        console.log(e82)
    }
}, 2000)
`

document.getElementsByTagName('body')[0].appendChild(scriptElement)