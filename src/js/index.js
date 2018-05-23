//依赖配置
require(["config"], function(){
	//依赖配置中各短名称的模块
	require(["jquery", "load", "section","play"], function($){
		$(function(){
			// 轮播图数据
			$(".box").carousel({
				imgs : [
					{src:"imgs/79be2e56d04dd90f776e90adef18d8fc..jpg", href:"xx1.html"},
					{src:"imgs/167c590612b36dba287cf9f62709b406..jpg", href:"xx2.html"},
					{src:"imgs/a8b98779659be09642aa89b76dc5c7d6..jpg", href:"xx3.html"},
					{src:"imgs/cff706b3ab1d7709915b8cc88866c722..jpg", href:"xx4.html"},
					{src:"imgs/d5b6a4531ae156787e49b623d8bc7c9d..jpg", href:"xx5.html"},
					{src:"imgs/fa607043fc1fb4ee4c2b2fdafb24437c..jpg", href:"xx6.html"}
				],
				// width : 1000,
				height : 360,
				duration : 3000,
				addPrevNextBtn: false
			});

			// salehot数据加入
			//利用ajax来访问后端接口，获取数据
			var num = 1;
			$.ajax({
				type : "get",
				url : "mock/salehotlist.json",
				dataType : "json",
				success : function(responseData){
					//当季精选处理数据，渲染
					responseData.res_body.list.forEach(function(product){
						$(".template").clone() //克隆模板
										.removeClass("template").addClass("pop") //修改类名
										.css({display:"block"}) //设置display
										.appendTo(".hotgoods") //追加到.hotgoods内部
										.children(".goodsbox").children(".goods-img").children(".salehot-goods-img").attr("src", product.salehotgoodsimg) //修改图片路径
										.parents(".goods-img").next(".goods-name").text(product.goodsname)//商品名字
										.next().text(product.id)//商品编号
										.next().children(".goods-price-span").text(product.goodspricespan);//商品价格
					});
					//特色商品区				
					responseData.res_body.contitle.forEach(function(pro){

						$(".mb-special-area").clone()
												.removeClass("mb-special-area").addClass("special-area")
												.css({display:"block"})
												.appendTo(".content-list")
												.find(".fir-title").text(pro.firtitle)
												.next().text(pro.sectitle)
												.parents(".special-area").find(".master-map").children("img").attr("src", pro.img)
												.parents(".special-area").find(".precial-goodsbox").addClass("pro"+num);
						var _arr;
						if(num<5){
							if(num == 1){
								_arr = responseData.res_body.congoods.one;
							}else if(num ==2){
								_arr = responseData.res_body.congoods.two;
							}else if(num ==3){
								_arr = responseData.res_body.congoods.three;
							}else if(num ==4){
								_arr = responseData.res_body.congoods.four;
							}
							_arr.forEach(function(prod){
									$(".mb-precial-goods").clone()
															.removeClass("mb-precial-goods").addClass("precial-goods")
															.css({display:"block"})
															.appendTo(".pro"+num)
															.children("img").attr("src", prod.img)
															.next(".precial-goods-name").text(prod.name)
															.next().text(prod.price);
							});
							num++;	
						}	

					});
				},
				error:function(err){
					console.log(err)
				}
			});

			//添加当季精选changegoods点击事件
			var a = 2;
			$(".changegoods").click(function(){
				if(a % 2 == 0){
					$(".hotgoods").css({left: "-1146px"});
				}else{
					$(".hotgoods").css({left: "0px"});
				}
				a++;
			});			
		});
	});
});