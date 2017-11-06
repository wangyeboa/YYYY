
  $(function(){
	

	
    class Pagination{
        constructor(){
          
            if(!Pagination.res){
                 this.load();
            }else{
                this.init();
            }
        }
        load(){
            //获取数据; 
            var that = this;
            $.ajax({
            	url:"http://127.0.0.1:8020/Econgshangcheng/php/commodity.json",
            	dataType:"json",
            	jsonp:"callback"
            	
            })
            .then(function(res){
                //成功;
                
                Pagination.res = res; //成功请求的json;
                console.log( Pagination.res);
                that.init();
            },function(a,b){
                //失败;
                console.log(b)
            })
        }
        init(){
            var that = this;
        	$(".pagination").pagination(Pagination.res.length,{
                items_per_page:10, //一页显示多少条;
                callback:function(index){
                    that.index = index; //当前显示的页数;
                    console.log(index)
                     that.rendringPag();
                    console.log(11)
                }
            })
			
        }
       

        rendringPag(){
            //console.log(this.index);
            console.log(111)
            var html = "";
            for(var i = this.index * 56 ; i < (this.index + 1)* 56; i++){
                if( i < Pagination.res.length){
                   if(Pagination.res[i].express == undefined){
						html+=`<li id="${Pagination.res[i].id}">
							<a href="http://127.0.0.1:8020/Econgshangcheng/details.html">
								<div class="Flagphoto">
									<img src="${Pagination.res[i].Flagphoto}"/>
								</div>
								
								<div class="Commoditypictures">
									<img src="${Pagination.res[i].img}"/>
									<span>${Pagination.res[i].pound}</span>
									
								</div>
								
								<div class="commodity">
									<ul>
										<li>
											<img src="${Pagination.res[i].top1}"/>
										</li>
										<li>
											<img src="${Pagination.res[i].top2}"/>
										</li>
									</ul>
								</div>
								
								<a class="name">
									
									<span class="name1">${Pagination.res[i].name}</span>
								</a>
								
								<div class="Price">
									<span class="Price-1">${Pagination.res[i].Pricea}</span>
									<span class="Price1">${Pagination.res[i].price}</span>
									<span class="weight">${Pagination.res[i].weight}</span>
								</div>
								<div class="Sale">
									<span>${Pagination.res[i].Sold}</span>
									<span>${Pagination.res[i].hudong}</span>
								</div>
								</a>
							</li>`
			
			
					}else{
						html+=`<li id="${Pagination.res[i].id}">
						<a href="http://127.0.0.1:8020/Econgshangcheng/details.html">
								<div class="Flagphoto">
									<img src="${Pagination.res[i].Flagphoto}"/>
								</div>
								
								<div class="Commoditypictures">
									<img src="${Pagination.res[i].img}"/>
									<span>${Pagination.res[i].pound}</span>
									
								</div>
								
								<div class="commodity">
									<ul>
										<li>
											<img src="${Pagination.res[i].top1}"/>
										</li>
										<li>
											<img src="${Pagination.res[i].top2}"/>
										</li>
									</ul>
								</div>
								
								<a class="name">
									<span class="Directmai">${Pagination.res[i].express}</span>
									<span class="name1">${Pagination.res[i].name}</span>
								</a>
								
								<div class="Price">
									<span class="Price-1">${Pagination.res[i].Pricea}</span>
									<span class="Price1">${Pagination.res[i].price}</span>
									<span class="weight">${Pagination.res[i].weight}</span>
								</div>
								<div class="Sale">
									<span>${Pagination.res[i].Sold}</span>
									<span>${Pagination.res[i].hudong}</span>
								</div>
								</a>
							</li>`
					}
				}
			}
					$(".boss_inner").html(html);
		}
	}        
      new Pagination();
console.log($(".boss_inner"))




$(".boss_inner").on("click","li",function(){
	$.cookie("date-id",$(this).attr("id"))
})






 })   