
$(function(){
	
	var headLi = $('.head_topNav').find('li');
	var headHr = $('.head_topNav').find('hr');
	//header_top********************************
	for(var i=0; i<headLi.length; i++){
		headLi[i].index = i
		headLi[i].addEventListener('click',function(){
			for(var j=0; j<headLi.length; j++){
				headLi[j].className = '';
				headHr[j].style.display = 'block';
			}
			this.className = 'head_active';
			if(this.index == 0){
				headHr[this.index].style.display = 'none';
			}else{
				headHr[Math.abs(this.index-1)].style.display = 'none';
				headHr[this.index].style.display = 'none';
			}
		});
	}
	//head_search
	
	//head_oneLeft*******************************************************
	var oneLeftA = $('.section_oneLeft').find('a');
	var oneLeftSpan = oneLeftA.find('span');
	var num = -1;
	
	var oneleft = json.one.oneleft;
	for(var i=0; i<oneLeftA.length;i++){
		oneLeftA[i].index = i
		if(i%2 == 0){
			num++
			oneLeftA.eq(i).find('span').eq(0).css('backgroundPosition','-17px '+(-num*60-19)+'px');
			oneLeftA.eq(i).on('mouseover',function(){
				var index = this.index/2
				$(this).find('span').eq(0).css('backgroundPosition','-73px '+(-index*60-19)+'px');
			})
			oneLeftA.eq(i).on('mouseout',function(){
				var index = (this.index)/2
				$(this).find('span').eq(0).css('backgroundPosition','-17px '+(-index*60-18)+'px');
			})
		}else if(i%2 != 0){
			oneLeftA.eq(i).find('span').eq(0).css('backgroundPosition','-124px '+(-num*60-18)+'px');
			oneLeftA.eq(i).on('mouseover',function(){
				var index = (this.index-1)/2
				$(this).find('span').eq(0).css('backgroundPosition','-180px '+(-index*60-19)+'px');
			})
			oneLeftA.eq(i).on('mouseout',function(){
				var index = (this.index-1)/2
				$(this).find('span').eq(0).css('backgroundPosition','-124px '+(-index*60-18)+'px');
			})	
		}
	}
	var onel = -1
	for(var i=0; i<oneLeftA.length; i++){
		onel++
		oneLeftA.eq(i).find('span').eq(2).text(oneleft[onel])
	}
	
	//head_oneTon*******************************************************
	var onetop = json.one.onetop;
	var onetopNav = json.one.onetopNav;
	var oneTop = $('.section_oneTop')[0]
	var oneLb = $('.section_oneLb')[0];
	var oneNav = $('.section_oneNav')[0];
	var Lbnum = null
	
	
	
	for(var i=0; i<onetop.length;i++){
		oneLb.innerHTML += '<li><a href="javascript:;"><img src="'+onetop[i]+'"/></a></li>';
		oneNav.innerHTML += '<li>'+onetopNav[i]+'</li>';
	}
	oneNav.innerHTML += '<li><a href="javascript:;"><span></span><span></span><span></span></a></li>'
	
	var oneLbli = document.createElement('li')
	oneLb.appendChild(oneLbli);
	var oneBli = $('.section_oneLb').find('li');
	var oneNli = $('.section_oneNav').find('li');
	oneLb.style.width = oneBli.length*743+'px';
	oneBli[5].innerHTML = '<a href="javascript:;"><img src="'+onetop[0]+'"/></a>';
	var onetimer = setInterval(function(){
		fnoneLb()
	},2000)
	oneTop.onmouseover = function(){
		clearInterval(onetimer)
	}
	oneTop.onmouseout = function(){
		clearInterval(onetimer)
		onetimer = setInterval(function(){
			fnoneLb()
		},2000)
	}
	
	function fnoneLb(){
		Lbnum++;
		if(Lbnum>=oneBli.length){
			Lbnum = 0;
			oneLb.style.transition = 'none';
		}if (Lbnum > 0 && Lbnum <= oneBli.length){
			oneLb.style.transition = '1s';
			for(var i=0; i<oneBli.length-1; i++){
				oneNli[i].style.background = 'rgba(0,0,0,.7)';
			}
			oneNli[Lbnum].style.background = '#ed4259';
			if(Lbnum > 4){
				oneNli[Lbnum].style.background = 'rgba(0,0,0,.7)';
				oneNli[0].style.background = '#ed4259';
			}
		}
		oneLb.style.left = -Lbnum*743+'px';
	}
	
	for(var i=0; i<oneBli.length-1; i++){
		oneNli[i].index = i;
		oneNli[i].addEventListener('click',function(){
			clearInterval(onetimer)
			Lbnum = this.index;
			oneLb.style.transition = '1s';
			oneLb.style.left = -Lbnum*743+'px';
			for(var i=0; i<oneNli.length;i++){
				oneNli[i].style.background = 'rgba(0,0,0,0.7)';
			}
			this.style.background = '#ed4259';
		},false);
	}
	
	
	//head_onebBottom*******************************************************
	var oneBottom = $('.section_oneBottom');
	var onebtm = json.one.onebottom;
	for(var i=0; i<onebtm.length; i++){
		oneBottom[0].innerHTML += '<li><a href="javascript:;"><img src="'+onebtm[i]+'"/></a></li>';
	}
	//head_onebRight*******************************************************
	
	var oneRimg = $('.oneRibtn');
	var oneRtop = $('.oneRight_top').find('ul')[0];
	var oneRbtm = $('.oneRight_top').find('ul')[1];
	var oneRlg = $('.oneRlg');
	var onerig = json.one.oneright.oneright_top;
	var onerlg = json.one.oneright.oneright_lg;
	var Rlgnum = null
	//oneRli添加li
	for(var i=0; i<onerig.length-5; i++){
		oneRtop.innerHTML += '<li><a href="javascript:;" class="Hblack">'+onerig[i]+'</a></li>';
	}
	
	oneRtop.innerHTML += '<li><a href="javascript:;"><span>'+onerig[4]+'</span>'+onerig[5]+'</a></li>';
	oneRtop.innerHTML += '<li><a href="javascript:;"><span>'+onerig[6]+'</span>'+onerig[7]+'</a></li>';
	oneRimg.html('<img src="'+onerig[8]+'" />');
	var oneRli = oneRtop.querySelectorAll('li');
	
	//给oneRlg添加 li
	for(var i=0; i<onerlg.length;i++){
		if(i == onerlg.length-1){
			oneRlg[0].innerHTML += '<li><a href="javascript:;" class="Hblack">'+onerlg[0]+'</a></li>';
		}else{
			oneRlg[0].innerHTML += '<li><a href="javascript:;" class="Hblack">'+onerlg[i]+'</a></li>';
		}
	}
	
	var oneRlgli = $('.oneRlg').find('li');
	var oneRlgA = oneRlgli.find('a');
	function Rlg(){
		Rlgnum++
		if(Rlgnum == onerlg.length){
			Rlgnum = 0
			oneRlg.animate({'top': -17*Rlgnum+'px'})
			oneRlg.stop(false, true)//让动画直接到达未达状态，继续下一个动画
		}else{
			oneRlg.animate({'top': -17*Rlgnum+'px'})
		}
	}
	
	clearInterval(Rlgtime);
	var Rlgtime = setInterval(function(){
		Rlg()
	},3000)
	oneRlg.on('mouseover',function(){
		clearInterval(Rlgtime);
	})
	oneRlg.on('mouseout',function(){
		clearInterval(Rlgtime);
		Rlgtime = setInterval(function(){
			Rlg()
		},3000)
	})
	
	//section_twoCenter*******************************************************
	
	var twoLbli = $('.twolb').find('li');
	var twoLbUi = $('.twolb').find('ul')
	for(var i=0; i<twoLbli.length;i++){
		twoLbli[i].style.backgroundImage = 'url(img/img/xlunbo0'+(i+1)+'.jpg)';
		var oliClass = twoLbli.eq(i).prop("className")
		if(!oliClass){
			twoLbli.eq(i).css({"opacity":"0"})
		}
		twoLbli.eq(i).on('click',function(){
			var oNext = $(this).next()
			var oPrev = $(this).prev()
			if(this.className == 'twolbli4'){
				var lbPrev =  oPrev.prev().prev()
				twoLbUi.append(lbPrev)
			}else if(this.className == 'twolbli3'){
				var lbnext =  oNext.next().next()
				twoLbUi.prepend(lbnext)
			}
			if( this.className == 'twolbli5'){
				var lbPrev1 =  oPrev.prev().prev();
				var lbPrev2 =  lbPrev1.prev();
				twoLbUi.append(lbPrev1,lbPrev2)
			}else if(this.className == 'twolbli2'){
				var lbnext1 = oNext.next().next();
				var lbnext2 = lbnext1.next();
				twoLbUi.prepend(lbnext1,lbnext2)
			}
			for(var i=0; i<twoLbli.length;i++){
				twoLbli.eq(i).removeClass()
			}
			$(this).addClass('twolbli1');
			var oNext = $(this).next();
			var oPrev = $(this).prev();
			oNext.addClass('twolbli4');
			oNext.next().addClass('twolbli5');
			oPrev.addClass('twolbli3');
			oPrev.prev().addClass('twolbli2');
			for(var i=0; i<twoLbli.length;i++){
				
			if(!oliClass){
				twoLbli.eq(i).css({"opacity":"1"})
			}
			}
		})
	}
	
	
	//section_twoCenter-----twoCcenter*******************************************************
	
	var oTcenter = $('.twoCcenter');
	var oTbtm = $('.twoCbottom');
	var oTc1 = json.two.twocenter.twoCctr.twoC1;
	var oTc2 = json.two.twocenter.twoCctr.twoC2;
	var oTbottom = json.two.twocenter.twobottom;
	fnoTul(oTc1);
	fnoTul(oTc2);
	function fnoTul(obj){
		var oTul = $('<ul></ul>');
		var oTli = '';
		for(var i=0; i<obj.length; i++){
			oTli +=`
				<li>
					<h5>${obj[i][0]}</h5>
					<span><span>${obj[i][1]}</span>${oTc1[i][2]}</span>
					<p class="beyond">
						${obj[i][3]}
					</p>
				</li>
			`
		}
		oTul.append(oTli);
		oTcenter.append(oTul);
	}
	
	fnoTbtm(oTbottom[0])
	fnoTbtm(oTbottom[1])
	function fnoTbtm(obj){
		var oTdiv =`
			<div>
				<h5>${obj[0]}</h5>
				<p class="beyond">${obj[1]}</p>
				<span class="spnimg">
					<img src="${obj[2]}"/>
				</span>
			</div>
		`
		oTbtm.append(oTdiv);
	}

	
	
	//section-----banner_one*******************************************************
	var oBanner = json.bannerimg
	let oBanOne = $('#banner_one');
	let oBanTwo = $('#banner_two');
	let oBanThree = $('#banner_three');
	oBanOne.css({"background-image":"url("+oBanner[0]+")"})
	oBanTwo.css({"background-image":"url("+oBanner[1]+")"})
	oBanThree.css({"background-image":"url("+oBanner[2]+")"})
	
	

})

 













