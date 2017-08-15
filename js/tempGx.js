$(function(){
	let jsonSevenGx = json.seven.tempGx;
	Vue.component("gx-component",{
		props:["seven"],
		template:`
			<div class="tempGx">
				<ul>
					<li><img :src="seven[0]" /></li>
					<li><a href="javascript:;" class="Hblack">{{seven[1]}}</a></li>
					<li>{{seven[2]}}</li>
					<li><a href="javascript:;" class="Hwblack">{{seven[3]}}</a></li>
					<li>
						<p>{{seven[4]}}</p>
					</li>
				</ul>
			</div>
		`
	}),
	new Vue({
		el:'#sevenGx',
		data:{
			sevenGx1:jsonSevenGx[0],
			sevenGx2:jsonSevenGx[1],
			sevenGx3:jsonSevenGx[2]
		}
	})
})


















