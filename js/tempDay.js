
$(function(){
	var jsonDay = json.five.fiveTday
	var jsonsix = json.five.fiveTday
	Vue.component("day-component",{
		props:["list"],
		template:`
			<div class="tmpeDay">
				<div class="tempImg"><img :src="list[0]" /></div>
				<ul>
					<li><a href="javascript:;" class="Hblack">{{list[1]}}</a></li>
					<li>
						<p class="beyond">{{list[2]}}</p>
					</li>
					<li>
						<a href="javascript:;" class="Hwblack">
						<img src="img/image/user.0.1.png" />
						{{list[3]}}</a>
						<div>
							<span>{{list[4]}}</span>
							<span>{{list[5]}}</span>  
						</div>
					</li>
				</ul>
			</div>
		`
	}),
	new Vue({
		el:'#fiveCenter',
		data:{
			list1:jsonDay[0],
			list2:jsonDay[1],
			list3:jsonDay[2],
			list4:jsonDay[3],
			list5:jsonDay[4],
			list6:jsonDay[5],
		}
	}),
	new Vue({
		el:'#sixCenter',
		data:{
			six1:jsonsix[0],
			six2:jsonsix[1],
			six3:jsonsix[2],
			six4:jsonsix[3],
			six5:jsonsix[4],
			six6:jsonsix[5],
		}
	})
	
})


















