var btn=document.getElementById("mybtn");
var info=document.getElementById("success");

window.onload=function(){
	btn.addEventListener('mouseover',movebtn,false);
	btn.addEventListener('click',clickbtn,false);
}

function movebtn(){
	if(!event.shiftKey){
		var new_width=Math.random()*(window.innerWidth-btn.style.width);
		var new_height=Math.random()*(window.innerHeight-btn.style.height);
		btn.style.left=new_width+"px";
		btn.style.top=new_height+"px";
	}
}

function clickbtn(){
	if(btn.innerHTML=="Click Me"){
		btn.removeEventListener('mouseover',movebtn);
		info.style.display="";	
		btn.innerHTML="Play Again";
	}
	else if(btn.innerHTML=="Play Again"){
		btn.addEventListener('mouseover',movebtn,false);
		info.style.display="none";
		movebtn();
		btn.innerHTML="Click Me";
	}
}