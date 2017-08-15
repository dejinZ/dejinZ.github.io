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