
//head.js
$(function(){


function Head(){
	
	this.init();
	
}

Head.prototype.init = function(){

	var that = this;
	$("#head_inner1").find("li").find("a").mouseover(function(){
		
		//console.log($(this))
	that.move($(this))
		//字体颜色
	})
	
	$("#head_inner1").find("li").find("a").mouseout(function(){
		
		//console.log($(this))
	that.shou($(this))
		//字体颜色
	})
	
	
	$("#head_inner2").find("li").find("a").mouseover(function(){
		
		//console.log($(this))
	that.move($(this))
		//字体颜色
	})
	
	$("#head_inner2").find("li").find("a").mouseout(function(){
		
		//console.log($(this))
	that.shou($(this))
		//字体颜色
	})
	
	$("#head_inner2_a").mouseover(function(){
		that.tow($(".head_inner2_a"))
		that.xuanzhuan($("#head_inner2_a img"))
		//显示隐藏 和小图旋转
	})
	
	$("#head_inner2_a").mouseout(function(){
		that.towa($(".head_inner2_a"))
		that.xuanzhuan1($("#head_inner2_a img"))
		//显示隐藏 和小图旋转
	})
	
	
	$("#head_inner2_b").mouseover(function(){
		
		//console.log($(this))
	that.tow($(".head_inner2_b"))
	that.xuanzhuan($("#head_inner2_b img"))	
	//显示隐藏 和小图旋转
	})
	
	$("#head_inner2_b").mouseout(function(){
		
		//console.log($(this))
	that.towa($(".head_inner2_b"))
	that.xuanzhuan1($("#head_inner2_b img"))	
	//显示隐藏 和小图旋转
	})
	
	
	
	$("#head_inner2_c").mouseover(function(){
		
		//console.log($(this))
	that.tow($(".head_inner2_c"))
	
	//显示隐藏 
	})
	
	$("#head_inner2_c").mouseout(function(){
		
		//console.log($(this))
	that.towa($(".head_inner2_c"))
	
	//显示隐藏 
	})
	
	//热门搜索 字体颜色
	$(".Hot").find("li").find("a").mouseover(function(){
		
			$(this).css("color","#333333")
	})
	
	$(".Hot").find("li").find("a").mouseout(function(){
		
			$(this).css("color","#999999")
	})
	
	
	
	$("#Hot_a").find("a").mouseover(function(){
		
			$(this).css("color","#ff0000")
	})
	
	$("#Hot_a").find("a").mouseout(function(){
		
			$(this).css("color","#ff0000")
	})
	
	
	
	//购物车字体颜色
	$(".Shopping").find("a").mouseover(function(){
		that.move($(this))
		
	})
	
	$(".Shopping").find("a").mouseout(function(){
		that.shou($(this))
		
	})
	
	
	$(".nav_inner2").find("a").mouseover(function(){
		
		that.xuanzhuan($(".nav_inner2 a i"))
		
	})
	
	$(".nav_inner2").find("a").mouseout(function(){
		
		that.xuanzhuan1($(".nav_inner2 a i"))
		
	})
	
		//
	$(".nav_inner1").find("a").mouseover(function(){
		
		that.xuanzhuan($(".nav_inner1 a i"))
		
	})
			
	$(".nav_inner1").find("a").mouseout(function(){
		
		that.xuanzhuan1($(".nav_inner1 a i"))
		
	})
	
		//小骨头动画效果
	$(".nav_inner3").find("li").mouseenter(function(){
		
				if(!this.rotate){
					this.rotate = 0;
				}
				
				$(this).find("a").css("color","#459D36")
				this.rotate += 360;
				var that = this;
				$(this).find("i").css({
					transition:"all 0.3s",
					transform:"rotate("+that.rotate +"deg)",
				})

	})
	
	$(".nav_inner3").find("li").mouseleave(function(){
				
				$(this).find("a").css("color","#000")
				

	})
	
	$("#nav_inner1").mouseenter(function(){
		
		$(this).addClass("nav_inner1")
		.siblings().removeClass("main11k");
		
	})
	
	
	
	$(".mian_box_inner1>ul>a").mouseenter(function(){
		
		$(this).addClass("mian_box_inner11")
		.siblings().removeClass("mian_box_inner11")
	})
	
	$(".mian_box_inner1>ul>a").mouseleave(function(){
		
		$(this).removeClass("mian_box_inner11")
	})
	
	
	
	
	
	$(".mian_box_inner2>li>a").mouseenter(function(){
		
		$(this).addClass("mian_box_inner2_a")
		.siblings().removeClass("mian_box_inner2_a")
	})
	
	
	$(".mian_box_inner2>li>a").mouseleave(function(){
		
		$(this).removeClass("mian_box_inner2_a")
		
	
	})
	
	
	
	$(".main_TTT1>ul>li>a").mouseenter(function(){
		
		$(this).addClass("main_ttt1")
	})
	
	$(".main_TTT1>ul>li>a").mouseleave(function(){
		
		$(this).removeClass("main_ttt1")
	})
	
	
	$(".btn>span").mouseenter(function(){
		
		$(this).addClass("btn1")
		.siblings().removeClass("btn1")
		$(this).css("cursor","pointer")
	})
	
	$(".btn>span").mouseleave(function(){
		
		$(this).removeClass("btn1")
	})
	
	
	

	
	/*$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/commodity.json")
	.then(function(res){
		//console.log(res)
		var html="";
		for(var i = 0;i<res.length;i++){
			
			
			
			
			
			if(res[i].express == undefined){
				html+=`<li>
								<div class="Flagphoto">
									<img src="${res[i].Flagphoto}"/>
								</div>
								
								<div class="Commoditypictures">
									<img src="${res[i].img}"/>
									<span>${res[i].pound}</span>
									
								</div>
								
								<div class="commodity">
									<ul>
										<li>
											<img src="${res[i].top1}"/>
										</li>
										<li>
											<img src="${res[i].top2}"/>
										</li>
									</ul>
								</div>
								
								<a class="name">
									
									<span class="name1">${res[i].name}</span>
								</a>
								
								<div class="Price">
									<span class="Price-1">${res[i].Pricea}</span>
									<span class="Price1">${res[i].price}</span>
									<span class="weight">${res[i].weight}</span>
								</div>
								<div class="Sale">
									<span>${res[i].Sold}</span>
									<span>${res[i].hudong}</span>
								</div>
							</li>`
			
			
					}else{
						html+=`<li>
								<div class="Flagphoto">
									<img src="${res[i].Flagphoto}"/>
								</div>
								
								<div class="Commoditypictures">
									<img src="${res[i].img}"/>
									<span>${res[i].pound}</span>
									
								</div>
								
								<div class="commodity">
									<ul>
										<li>
											<img src="${res[i].top1}"/>
										</li>
										<li>
											<img src="${res[i].top2}"/>
										</li>
									</ul>
								</div>
								
								<a class="name">
									<span class="Directmai">${res[i].express}</span>
									<span class="name1">${res[i].name}</span>
								</a>
								
								<div class="Price">
									<span class="Price-1">${res[i].Pricea}</span>
									<span class="Price1">${res[i].price}</span>
									<span class="weight">${res[i].weight}</span>
								</div>
								<div class="Sale">
									<span>${res[i].Sold}</span>
									<span>${res[i].hudong}</span>
								</div>
							</li>`
					}
					 $(".boss_inner").html(html);
			}
			
			*/
		
		
		$(".boss_inner li").mouseenter(function(){
			
			$(this).css("border","1px solid #53aa5b")
			$(this).css("cursor","pointer")
		})
		$(".boss_inner li").mouseleave(function(){
			
			$(this).css("border","1px solid #dddddd")
		
		})
		
		$(".name1").mouseenter(function(){
			
			$(this).css("color","#427FD2")
			$(this).css("cursor","pointer")
		})
		
		$(".name1").mouseleave(function(){
			
			$(this).css("color","#444444")
		
		})
		
		
		
	
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	

Head.prototype.move = function(a){
	//字体颜色鼠标移入方法
	a.css("color","#248dcc");
	
}

Head.prototype.shou = function(a){
	//字体颜色鼠标移除方法
	a.css("color","#666");
	
}

Head.prototype.tow = function(a){
	//显示
	a.show()
	
}

Head.prototype.towa = function(a){
	//隐藏
	a.hide()
	
}
Head.prototype.xuanzhuan = function(a){
	
	a.css({
		transition:"all 0.3s",
		transform:"rotate(180deg)",
		transformOrigin:"50% 50%"
	})
	
}


Head.prototype.xuanzhuan1 = function(a){
	
	a.css({
		transition:"all 0.3s",
		transform:"rotate(0deg)"
	})



}

	
	
}
	new Head()
})
	
	







