/**
 * 坑1：想用JQuery?先在manifest.content_scripts.js中引入
 * 坑2：操作元素会有隐藏bug（disable video.pause），
 * 所以只能附加到html里
 * 坑3：script只能用.appendChild才能生效
 * 
 */

 var scriptElement=document.createElement('script')

scriptElement.innerHTML=`

setInterval(function() {

    try {

        //ensure it is video page && video loaded
        if(document.getElementsByTagName('video').length==0){
            return;
        }

        try{

            var video00=document.getElementsByTagName('video')[0];
            video00.pause = function () { }//disable video.pause
            //video00.play()
        }catch(e92){}
        
        var progress=$('.video-percent').text()
        $('title').text(progress+"%")
        
    } catch(e82){
        console.log(e82)
    }
}, 1000)

///

buttonAdded=true

function func97(){
    var url00=document.URL
    url00=url00.substring(0,url00.indexOf("#"))
    var strNum00=url00.substring(url00.lastIndexOf('/')+1)
    var Num00=parseInt(strNum00)
    var strNum01=(Num00+1).toString()
    var url01=url00.replace(strNum00,strNum01)
    window.open(url01)
}

`

document.getElementsByTagName('body')[0].appendChild(scriptElement)

//add button

document.getElementsByTagName('body')[0].innerHTML+=`

<div style="z-index:6324;position:absolute;top:0;left:0;">
<button onclick="func97()">下一个视频</button>
</div>

`