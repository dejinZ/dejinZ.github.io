$(function(){
	Temp1({
		elements:'.section_twoLeft',
		wlDate: json.two.twoleft,
		title:'本周强推'
	})
	Temp1({
		elements:'.section_twoRight',
		wlDate: json.two.tworight,
		title: '三江·网文新风'
	})
	
	function Temp1(obj){
		let html = $('<ul class="towtempLR"></ul>');
		let li = '<h3>'+obj.title+'<span>更多></span></h3>';
		
		for(var i=0; i<obj.wlDate.length;i++){
			li += `
				<li>
					<a href="javascript:;" class="Hgray">${obj.wlDate[i][0]}</a>
					<a href="javascript:;" class="Hblack">${obj.wlDate[i][1]}</a>
					<a href="javascript:;" class="Hwhite">${obj.wlDate[i][2]}</a>
				</li>
			`
		}
		html.append(li);
		var temp1 = $(obj.elements);
		temp1.html(html);
		
	}
})



















