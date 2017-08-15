$(function(){
	 let sevenAut = json.seven.tempAut;
	 Vue.component("aut-component",{
	 	props:["seven"],
	 	template:`
	 		<div class="tempAut">
				<ul>
					<li><a href="javascript:;"><img :src="seven[0]" /></a></li>
					<li><a href="javascript:;">{{seven[1]}}</a></li>
					<li>{{seven[2]}}</li>
					<li>{{seven[3]}}</li>
					<li>
						<a href="javascript:;">{{seven[4]}}</a>{{seven[5]}}
						<a href="javascript:;">{{seven[6]}}</a>{{seven[7]}}
						<a href="javascript:;">{{seven[8]}}</a></li>
					<li>
						<p>
							{{seven[9]}}
						</p>
					</li>
				</ul>
			</div>
	 	`
	 })
	 
	 new Vue({
	 	el:"#sevenAut",
	 	data:{
	 		sevenAut1:sevenAut[0],
	 		sevenAut2:sevenAut[1],
	 		sevenAut3:sevenAut[2]
	 	}
	 })
})

























