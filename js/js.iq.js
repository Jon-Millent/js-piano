 function css(obj,attr,value) {
    switch (arguments.length) {
        case 2:
            if (typeof arguments[1] == "object") { 
                for (var i in attr) obj.style[i] = attr[i]
            }
            else { 
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr]
            }
            break;
        case 3:
            obj.style[attr] = value;
            break;
        default:
            return "";
    }
}
document.ready = function (callback) {
    ///兼容FF,Google
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false)
    }
     //兼容IE
    else if (document.attachEvent) {
        document.attachEvent('onreadytstatechange', function () {
              if (document.readyState == "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        callback();
               }
        })
    }
    else if (document.lastChild == document.body) {
        callback();
    }
}
function hasClass(node,name,type){
    var arr=node.className.split(' ');
    var isFind=false;
    for(var i =0;i<arr.length;i++){
        if(arr[i]==name){
            isFind=true;
        }
    }
    if(type){
        return [isFind,arr];
    }else{
        return isFind;
    }
 }
function addClass(obj,cls){
    if(!hasClass(obj,cls)){
        obj.className+=(" "+cls);
    }
}
function removeClass(node,name){
    if(hasClass(node,name,true)[0]){
        var arr=hasClass(node,name,true)[1];
        for(var i=0;i<arr.length;i++){
            if(arr[i]==name){
                arr.splice(i,1);
            }
        }
        node.className=arr.join(' ');
    }
 }