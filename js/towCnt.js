$(function(){
	var oBox = document.getElementsByClassName('towTop')[0];
	var oDiv = oBox.getElementsByTagName('div');
	for(var i=1;i<oDiv.length;i++){
		oDiv.time = null;
	}
	oDiv[0].onmouseover = function(){
			fnMove(oDiv[2],405);
			fnMove(oDiv[4],555);
		}
	oDiv[2].onmouseover = function(){
			fnMove(oDiv[2],150);
			fnMove(oDiv[4],555);
		}
	oDiv[4].onmouseover = function(){
			fnMove(this,300);
			fnMove(oDiv[2],150);
		}
	
			
	function fnMove(Obj,iTa){
		clearInterval(Obj.time)
		Obj.time = setInterval(function(){
			var speed = (iTa-Obj.offsetLeft)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(Obj.offsetLeft == iTa){
				clearInterval(Obj.time);
			}else{
				Obj.style.left = Obj.offsetLeft + speed + 'px';
			}
		},30)
	}

})