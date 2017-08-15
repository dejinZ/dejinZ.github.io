$(function(){
	var jsonFour = json.four.fourclu
	
	Vue.component("four-component",{
		props:["list"],
		template:`
			<div class="fourcolumn">
				<h4>{{list[0]}}&nbsp·&nbsp{{list[1]}}</h4>
				<img src="img/image/04_11.png" />
				<ul>
					<li><span class="Hgray">「{{list[0]}}」</span><span class="Hblack">{{list[2]}}</span></li>
					<li><span class="Hgray">「{{list[0]}}」</span><span class="Hblack">{{list[3]}}</span></li>
					<li><span class="Hgray">「{{list[0]}}」</span><span class="Hblack">{{list[4]}}</span></li>
					<li><span class="Hgray">「{{list[0]}}」</span><span class="Hblack">{{list[5]}}</span></li>
					<li><span class="Hgray">「{{list[1]}}」</span><span class="Hblack">{{list[6]}}</span></li>
				</ul>
			</div>
		`
	}),
	new Vue({
		el:'#fourcolumn',
		data:{
			list1:jsonFour[0],
			list2:jsonFour[1],
			list3:jsonFour[2],
			list4:jsonFour[3],
			list5:jsonFour[4],
			list6:jsonFour[5],
			list7:jsonFour[6],
		}
	})
	
})