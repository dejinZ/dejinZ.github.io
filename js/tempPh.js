$(function(){
	//section-three*******************************************************
	var oThree = $("#section_three");
	var oThinp = $(".three_button").find("input");
	var oFiveRight = $(".section_fiveRight");
	var oSixRight = $(".section_sixRight");
	var oHrfyb = json.three.fyb;
	var oHrrxb = json.three.rxb;
	var oHrzdjb = json.three.zdjb;
	var oHrztjb = json.three.ztjb;
	var oHrzyxsb = json.three.zyxsb;
	var oFRight = json.five.fiveTlr
	
	fnoHr(oHrfyb,oThree);
	fnoHr(oHrrxb,oThree);
	fnoHr(oHrzdjb,oThree);
	fnoHr(oHrztjb,oThree);
	fnoHr(oHrzyxsb,oThree);
	fnoHr(oFRight,oFiveRight);
	fnoHr(oFRight,oSixRight);
	function fnoHr(obj,box){
		var html =`
			<div class="tempPh">
				<h3>${obj.title}<span>更多></span></h3>
				<div>
					<ul>
						<li>NO.1</li>
						<li><a href="javascript:;" class="Hblack">${obj.first[0]}</a></li>
						<li>
							<span>${obj.first[1]}</span>
							${obj.first[2]}
						</li>
						<li>
							<a href="" class="Hwhite">${obj.first[3]}</a>
							<span>·</span>
							<a href="" class="Hwblack">${obj.first[4]}</a>
						</li>
					</ul>
					<img src="${obj.first[5]}" />
				</div>
				<ul class="rank">
		`
			
			for(var i=0; i<obj.ranking.length; i++){
				html +=`
					<li>
						<span>${i+2}</span>
						<a href="javascript:;" class="Hblack">${obj.ranking[i]}</a>
						<span>${obj.pra[i]}</span>
					</li>
				`
			}
			
			html +=`
					</ul>
				</div>
			`
		box.append(html);
	}
	var oHrnum = null;
	oThinp.on("click",function(){
		oHrnum++
		if(oHrnum%2 != 0){
			oThree.css({"height":"600px"})
		}else{
			oThree.css({"height":"426px"})
		}
	})
})
