
//head.js
$(function(){
	

	

	


function Head(){
	
	this.init();
	this.show();
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
	

		//商品导航动画效果
	$(".banner_inner1").find("ul").hover(function(){
		$(this).css({
			borderBottom:"1px solid #459d36",
			borderTop:"1px solid #459d36"
		})
		
		$(this).stop().animate({
				'paddingLeft':'25px'
		},300)
		
	},function(){
		
		$(this).css({
			borderBottom:"1px dotted #dddddd",
			borderTop:"1px solid #fff"
		})
		
		$(this).stop().animate({
				'paddingLeft':'12px'
		})
	})
	
		//商品导航
	$(".banner_inner1>ul").eq(0).mouseover(function(){
		$(".banner_inner1_a").show();
		
	})
	
	$(".banner_inner1>ul").eq(0).mouseout(function(){
		$(".banner_inner1_a").hide();
		
	})
	
	
		//banner图右边动画效果
	$(".banner_inner3>ul").find("li").mouseover(function(){
		console.log($(this))
		$(this).stop().animate({
			'left':'985px'
		},200)	
	})
	
	
	$(".banner_inner3>ul").find("li").mouseout(function(){
		console.log($(this))
		$(this).stop().animate({
			'left':'998px'
		},200)	
	})
	
	
	
			//轮播图按钮颜色效果
	
	
	
	
		$("#btn").find("span").mouseenter(function(){
			index=$(this).index()
			$(this).addClass("qqq")
			.siblings().removeClass("qqq");
				
			if( index == 0 ){
				$(".banner").css({
					background:"rgb(241, 71, 100)",
				})
				$(".zxc").css({
					background:"rgb(241, 71, 100)",
					color:"#fff",
					border:"1px solid rgb(241, 71, 100)",
					
				})
			}
			
			if( index == 1 ){
				$(".banner").css({
					background:"rgb(135, 19, 216)",
				})
				$(".zxc").css({
					background:"rgb(135, 19, 216)",
					color:"#fff",
					border:"1px solid rgb(135, 19, 216)",
					
				})
				
			}
			
			if( index == 2 ){
				$(".banner").css({
					background:"rgb(254, 85, 114)",
					
				})
				$(".zxc").css({
					background:"rgb(254, 85, 114)",
					color:"#fff",
					border:"1px solid rgb(254, 85, 114)",
				
				})
			}
			
			if( index == 3 ){
				$(".banner").css({
					background:"rgb(123, 69, 229)",
					
				})
				$(".zxc").css({
					background:"rgb(123, 69, 229)",
					color:"#fff",
					border:"1px solid rgb(123, 69, 229)",
					
				})
			}
			
			if( index == 4 ){
				$(".banner").css({
					background:"rgb(213, 30, 61)",
					
				})
				$(".zxc").css({
					background:"rgb(213, 30, 61)",
					color:"#fff",
					border:"1px solid rgb(213, 30, 61)",
				
				})
			}
			
			
		})
		
		
		
	
		
		
		
		
			//轮播图
			//移入效果
			var Sindex = 0
			var index = 0
			
		$("#btn").find("span").mouseenter(function(){
		
		index = $(this).index()
	   
		var $li = $("#banner>li").eq(index);	
		//console.log($li)
			
			$("#banner>li").css({ //先清空同明度
				opacity:"0"
			})
			$li.stop().animate({
				opacity:"1"
			})
			
			Sindex = index;
		})
		
		var timer = null;
		
		timer = setInterval(function(){
			
			if(Sindex == $("#btn").find("span").length){
				Sindex = 0
			}else{
				Sindex++;
			}
			$("#btn").find("span").eq(Sindex).mouseenter();
		},3000)
		
		
		
		
		$("#banner").mouseenter(function(){
			
				clearInterval(timer)
			
		})
		
		$("#banner").mouseleave(function(){
				clearInterval(timer)
			timer = setInterval(function(){
			
			if(Sindex == $("#btn").find("span").length){
				Sindex = 0
			}else{
				Sindex++;
			}
			$("#btn").find("span").eq(Sindex).mouseenter();
		},3000)
			
		})
		
		
		
		
	$(".main2_ba>li").mouseenter(function(){
		$(this).find("a").find("img").stop().animate({
			'marginLeft':'-5px'
		},200)
	})
	$(".main2_ba>li").mouseleave(function(){
		$(this).find("a").find("img").stop().animate({
			'marginLeft':'0'
		},200)
	})
		
	
	$(".main2_bb>li>a>b>img").mouseenter(function(){
		$(this).stop().animate({
			'marginTop':"0"
		})
	})
	
	$(".main2_bb>li>a>b>img").mouseleave(function(){
		$(this).stop().animate({
			'marginTop':"5px"
		},200)
	})
		
	$(".main2_bb>li>a>span").mouseenter(function(){
		$(this).css({
			'color':"#248dcc"
		})
	})
	
	$(".main2_bb>li>a>span").mouseleave(function(){
		$(this).css({
			'color':"#666"
		})
	})
		
		
		
		
		
		
		
		
		
		
		
		
		
	$(".main2_db").find("li").find("a").mouseenter(function(){
		
		that.move($(this))
	})
	
	
	$(".main2_db").find("li").find("a").mouseleave(function(){
		
		that.shou($(this))
	})


	$(".main2_e").find("li").mouseenter(function(){
		
		$(this).addClass("kkk").siblings().removeClass("kkk")
		
			
		/*$(this).css({
			
				border:"1px solid #459d36",
				borderTop:"3px solid #459d36",
				borderBottom:"2px solid #fff",
				height:"36px"
		}).siblings().css({
			border:"",
				borderTop:"",
				borderBottom:"",
				height:""
		})
		*/
					
			$(this).find("a").css({
					border:"0"
					}).siblings().css({
						border:""
					})
		
				$(".main2_bb").css({
					borderTop:"1px solid #459d36"
				})
	})
	
	


	$(".main1>ul").find("li").find("a").mouseenter(function(){
		
		
	})

	
	$(".main2_e>li").eq(0).mouseenter(function(){
		
			$(".main2_ba").css({
				display:"block"
			})
			
			$(".main2_bb").css({
				display:"none"
			})
			
		
	})	
	
	$(".main2_e>li").eq(1).mouseenter(function(){
		
			$(".main2_ba").css({
				display:"none"
			})
			
			$(".main2_bb").css({
				display:"block"
			})
			
		
	})	
	
	
	
	
	
						//json  点击按钮轮播
	var that=this;
	this.iNow=0;
	$(".btn2").click(function(){
		
	   
	   	//console.log($(".main1a_1>ul").find("li").length)
	   	
		
		if(that.iNow == 7){
			that.iNow =  7
		}else{
			that.iNow++;
		}
			
		$(".main1a_1>ul").stop().animate({
			
			"marginLeft":-211*that.iNow
		})
		
		
		
	})
	
	$(".btn1").click(function(){
		
	    
	   	console.log(that.iNow)
	   	
		
		if(that.iNow <=0){
			that.iNow = 0
		}else{
			that.iNow--;
		}
			
		$(".main1a_1>ul").stop().animate({
			
			"marginLeft":-211*that.iNow
		})
		
		
		
	})
	
	
	
	

	$(".nav_inner1").find("a").mouseenter(function(){
		$(this).addClass(".zxc").siblings().removeClass(".zxc");
	})
	
	

	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
//    json1获取数据
	$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/index.json")
	.then(function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li>
						<a href="#">
									<div class="main1a_1_img">
										<img src="${res[i].img}"/>
										</div>
										<div class="main1a_1_box">
											
										</div>
										<div class="main1a_1_name">
											${res[i].name}
										</div>
										<div class="main1a_1_price">
											
											<span>${res[i].price}</span>
										</div>
										<div class="main1a_1_iii">
											
										</div>
										
									</a>
									<div class="main1a_1_over">
										<a href="#">已结束</a>
										
										</div>
								</li>`
		}
		$(".main1a_1 .json1").html(html)
	})
	
	
	//json2
	
	$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/index1.json")
	.then(function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li>
						<a href="#">
									<div class="main1a_1_img">
										<img src="${res[i].img}"/>
										</div>
										<div class="main1a_1_box">
											
										</div>
										<div class="main1a_1_name">
											${res[i].name}
										</div>
										<div class="main1a_1_price">
											
											<span>${res[i].price}</span>
										</div>
										<div class="main1a_1_iii">
											
										</div>
										
									</a>
									<div class="main1a_1_over">
										<a href="#">已结束</a>
										
										</div>
								</li>`
		}
		$(".main1a_1> .json2").html(html)
	})
	
	//json3
	$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/index2.json")
	.then(function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li>
						<a href="#">
									<div class="main1a_1_img">
										<img src="${res[i].img}"/>
										</div>
										<div class="main1a_1_box">
											
										</div>
										<div class="main1a_1_name">
											${res[i].name}
										</div>
										<div class="main1a_1_price">
											
											<span>${res[i].price}</span>
										</div>
										<div class="main1a_1_iii">
											
										</div>
										
									</a>
									<div class="main1a_1_over">
										<a href="#">已结束</a>
										
										</div>
								</li>`
		}
		$(".main1a_1> .json3").html(html)
	})
	
	
	
	
	//json4
	$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/index3.json")
	.then(function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li>
						<a href="#">
									<div class="main1a_1_img">
										<img src="${res[i].img}"/>
										</div>
										<div class="main1a_1_box">
											
										</div>
										<div class="main1a_1_name">
											${res[i].name}
										</div>
										<div class="main1a_1_price">
											
											<span>${res[i].price}</span>
										</div>
										<div class="main1a_1_iii">
											
										</div>
										
									</a>
									<div class="main1a_1_over">
										<a href="#">已结束</a>
										
										</div>
								</li>`
		}
		$(".main1a_1> .json4").html(html)
	})
	
	
	//json5
	$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/index4.json")
	.then(function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li>
						<a href="#">
									<div class="main1a_1_img">
										<img src="${res[i].img}"/>
										</div>
										<div class="main1a_1_box">
											
										</div>
										<div class="main1a_1_name">
											${res[i].name}
										</div>
										<div class="main1a_1_price">
											
											<span>${res[i].price}</span>
										</div>
										<div class="main1a_1_iii">
											
										</div>
										
									</a>
									<div class="main1a_1_over">
										<a href="#">已结束</a>
										
										</div>
								</li>`
		}
		$(".main1a_1> .json5").html(html)
	})
	
	//json6
	$.getJSON("http://127.0.0.1:8020/Econgshangcheng/php/index5.json")
	.then(function(res){
		console.log(res)
		var html="";
		for(var i=0;i<res.length;i++){
			html+=`<li>
						<a href="#">
									<div class="main1a_1_img">
										<img src="${res[i].img}"/>
										</div>
										<div class="main1a_1_box">
											
										</div>
										<div class="main1a_1_name">
											${res[i].name}
										</div>
										<div class="main1a_1_price">
											
											<span>${res[i].price}</span>
										</div>
										<div class="main1a_1_iii">
											
										</div>
										
									</a>
									<div class="main1a_1_over">
										<a href="#">已结束</a>
										
										</div>
								</li>`
		}
		$(".main1a_1> .json6").html(html)
		
		
		$(".main1a_1_img>img").mouseenter(function(){
			$(this).stop().animate({
				'marginTop':'-5px'
			})
		})
		
		$(".main1a_1_img>img").mouseleave(function(){
			$(this).stop().animate({
				'marginTop':'0'
			})
		})
		
		
		
	})
	
		
		
		
		
		
		

		
}











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








Head.prototype.show = function(){
	
	var index = 0
	$(".main11>a>li").mouseover(function(){
		index = $(this).index()
		$(".main11>a>li").removeClass("main11k").eq($(this).index()).addClass("main11k");
		/*$(this).addClass("main11k")
		.siblings().removeClass("main11k");*/
	})
	
	
	
	
	
	
	
	
	$(".main11>a>li").mouseover(function(){
		 index=$(this).index();    //获取LI的下标
		$(".main1a_1>ul").eq(index).css({
			display:"block"
		}).siblings().css({                   // .siblings() 它的所有兄弟元素
			display:"none"
		})
		
		
		
		})
	
	
}

new Head()






})



function CountDown(){
				this.hour = document.getElementById("hour");
				this.minute = document.getElementById("minute");
				this.second = document.getElementById("second");
				this.init();
			}
			CountDown.prototype.init = function(){
				//倒计时
				setInterval(this.time,1000);
			
			}
			var indexTime = 0;//判断时间过去了多久的标志变量
			var a = 2;//2个小时改变一次时间a为变量
			CountDown.prototype.time = function(){	
				var toD = new Date(); // 现在的时间
				var nowD = new Date(); // 现在的 时间
				
				indexTime++;
					//时间控制在两个小时
			if(indexTime == 3600){//时间过去1个小时了
				a = 2;
			}else if (indexTime == 7200) {//时间过去两个小时了
				a = 1;
				indexTime=0;
			}

			toD.setHours(nowD.getHours() + a);   //设置小时 让小时加2
			toD.setMinutes(0);   				// 设置分钟 让分钟等于0
			toD.setSeconds(0);					// 设置秒 让秒等于0
			
			var differTime = toD.getTime() - nowD.getTime();//时间差
			var hour = 0;
			var minute =0;
			var second = 0;
			if(differTime > 0){
				hour = Math.floor(differTime/1000/60/60%24);//获取小时差值
				minute  = Math.floor(differTime/1000/60%60);//获取分钟差值
				second= Math.floor(differTime/1000%60);	//获取秒差值	
				//时分秒少于10，补零
					this.hour.innerHTML =double(hour);
					this.minute.innerHTML =double(minute);
					this.second.innerHTML =double(second);
				}
			}
			function double(num){
				    if (num<10){
				        return "0"+num;   //如果时分秒少于10，则在前面加字符串0
			    }
			    else{
			 		return ""+num;        //否则，直接返回原有数字
				}
			}
			new CountDown();
			




