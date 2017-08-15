$(function(){
	 let lbfour = json.four.fourLb;
	 let lbfive = json.five.fiveLb;
	 let lbsix = json.six.sixLb;
	 Vue.component("lunbo-component",{
	 	props:["lb"],
	 	template:`
	 		<div class="tempLb">
				<ul class="temptop">
					<li class="flbleft">
						<a href="javascript:;">
							<img :src="lb[0][0]"/>
						</a>
					</li>
					<li class="flbcenter">
						<a href="javascript:;">
							<img :src="lb[1][0]"/>
						</a>
					</li>
					<li class="flbright">
						<a href="javascript:;">
							<img :src="lb[2][0]"/>
						</a>
					</li>
				</ul>
				<ul class="tempbot">
					<li class="Hblack">{{lb[0][1]}}</li>
					<li><a href="javascript:;">{{lb[0][2]}}</a></li>
					<li><span>{{lb[0][3]}}</span>人气</li>
				</ul>
				<p>
					{{lb[0][4]}}
				</p>
				<input type="button" value="书籍详情"/>
			</div>
	 	`
	 })
	 
	new Vue({
	 	el:"#fourlunbo",
	 	data:{
	 		lbfour
	 	}
	}),
	new Vue({
	 	el:"#fivelunbo",
	 	data:{
	 		lbfive
	 	}
	}),
	new Vue({
	 	el:"#sixlunbo",
	 	data:{
	 		lbsix
	 	}
	})
	
})