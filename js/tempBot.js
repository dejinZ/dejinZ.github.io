$(function(){
	 let bottom = json.bottom
	 Vue.component("bot-component",{
	 	props:["bottom"],
	 	template:`
	 		<ul>
				<li class="bottomMf">
					<span>限时免费</span>
					<span>VIP章节免费读</span>
					<img src="img/image/djsz.png"/>
					<span></span>
					<a href="javascript:;">进入限免频道></a>
				</li>
				<li v-for="item of bottom" class="botLi">
					<div class="tempBot">
						<div class="btnImg">
								<img :src="item[0]" />
						</div>
						<a href="javascript:;" class="Hblack">{{item[1]}}</a>
						<s>{{item[2]}}</s>
						<input type="button" value="免费阅读" />
					</div>
				</li>
			</ul>
	 	`
	 })
	 
	new Vue({
	 	el:"#section_bottom",
	 	data:{
	 		bottom
	 	}
	})
	 
	 
	var time = 500000;
	 function fallTime(){
	 	var d = Math.floor(time/24/60/60);
 		var h = Math.floor((time/60/60)%24)
 		var m = Math.floor((time/60)%60)
 		var s = Math.floor(time%60)
 		var t = toTime(d)+'天   '+ toTime(h)+' : '+toTime(m)+' : '+toTime(s);
 		
 		time--
 		$(".bottomMf").find("span").eq(2).html(t)
	}
	 function toTime(n){
	 	return n>9?n:'0'+n;
	 }
	setInterval(fallTime,1000);
})