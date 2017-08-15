$(function(){
	 let sevenCata = json.seven.tempCata
	 Vue.component("cata-component",{
	 	props:["seven"],
	 	template:`
	 		<div class="tempCata">
				<ul>
					<li v-for="item of seven">
						<a href="javascript:;" class="Hgray">{{item[0]}}</a>
						<a href="javascript:;" class="Hblack">{{item[1]}}</a>
						<a href="javascript:;" class="Hgray">{{item[2]}}</a>
						<a href="javascript:;" class="Hwblack">{{item[3]}}</a>
						<span>{{item[4]}}</span>
					</li>
				</ul>
			</div>
	 	`
	 })
	 
	 new Vue({
	 	el:"#sevenCata",
	 	data:{
	 		sevenCata:sevenCata
	 	}
	 })
})

























