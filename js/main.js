document.ready(function(){
	var spans=document.getElementById('voice');
	var mp3=document.getElementById('mp3');
	var mp4=document.getElementById('mp4');
	var num=false;
	var isClick=true;
	var text=document.getElementById('text');
	var btn=document.getElementById('play');
	var time=1;
	spans.onmousedown=function(event){
		var e = event || window.event;
		var ele=e.target||e.srcElement;
		if(ele.tagName.toLowerCase()=="span"||ele.tagName.toLowerCase()=="i"){
			if(num){
				mp3.setAttribute('src','./voice/'+ele.getAttribute('name')+'.mp3');
				num=false;
			}else{
				mp4.setAttribute('src','./voice/'+ele.getAttribute('name')+'.mp3');
				num=true;
			}
		}
	}
	btn.onclick=function(){
		var a=text.value.replace(/\s/g,'');
		btn.style.backgroundColor="#eee";
		if(isClick){
			isClick=false;
			if(/^(.{1,3}\,)+/img.test(a)){
			var tnum=false;
			    time=0;
			var arr=a.split(',');
			var stop=setInterval(function(){
				var musc=arr[time];
				console.log(musc)
				if(arr[time]!='p'){
					if(tnum){
						mp3.setAttribute('src','./voice/'+musc+'.mp3');
						tnum=false;
					}else{
						mp4.setAttribute('src','./voice/'+musc+'.mp3');
						tnum=true;
					}
					}else{
						mp3.setAttribute('src','./voice/'+'null'+'.mp3');
						mp4.setAttribute('src','./voice/'+'null'+'.mp3');
					}
					if(!arr[time]){
						clearInterval(stop);
						isClick=true;
						btn.style.backgroundColor="#000";
					}
					time++;
				},arr[0])
			}else{
				alert('音乐代码格式错误')
				isClick=true;
				btn.style.backgroundColor="#000";
			}
		}
		
	}
})
