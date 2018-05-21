//依赖配置
require(["config"], function(){
	//依赖配置中各短名称的模块
	require(["jquery", "load", "play"], function($){
		$(function(){
			// 老师的测试
			/*$(".container").hover(function(){
				// $(this).animate({opacity: 0.3}, 3000)
				console.log(this)
			}, function(){
				// $(this).animate({opacity: 1}, 3000)
				console.log(this)
			})*/

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
		});
	});
});