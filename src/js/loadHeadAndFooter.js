/*定义加载头部与尾部的模块*/
define(["jquery"], function($){
	$(function(){//通过ajax
		/*加载头部*/
		$("header").load("/html/include/header.html", function(){
			//老师的案例测试
			// /* 为搜索框绑定键盘弹起事件 */
			// $(".search .word").on("keyup", function(){
			// 	let _search = $(this).val(),
			// 	 	url = `https://suggest.taobao.com/sug?code=utf-8&q=${_search}&callback=?`;
			// 	$.getJSON(url, function(data){
			// 		// console.log(data);
			// 		var html = "";
			// 		data.result.forEach(function(curr){
			// 			html += `<div>${curr[0]}</div>`;
			// 		});
			// 		$(".suggest").html(html);
			// 	});
			// });

			// /* 判断cookie中是否有用户登录数据的保存 */
			// $.cookie.json = true;

			// // $.cookie("loginUser", "xiaoming", {path:"/"});

			// let user = $.cookie("loginUser");
			// if (user) {
			// 	$(".login_register").html(`
			// 		<a href="#">欢迎您： ${user}</a>
			// 		<a href="#">退出</a>
			// 		`);
			// }

			// 鼠标移入一级菜单事件
			// $(".firmenu").hover(function(){$(".minmenu").css({display: "block"});}, function(){$(".minmenu").css({display: "none"});});
			var _li = $(".smenu li");
			for(var i = 0; i < _li.length; i++){
			var html = $(_li[i]).html();
				html += `
						<div class="minmenu" id="min_${i+1}">
							<div><img src="../imgs/food (1).jpg"/></div>
							<div></div>
						</div>
						`;
				$(_li[i]).html(html);
			}
			$(".smenu li").mouseover(function(){
				var _a = $(this).children()[0],
					_val = $(_a).text();
				if(_val == "水果"){
					$("#min_2").children().children()[0].src = "../imgs/food (2).jpg"
				}
			})
			
		});

		/*加载尾部*/
		$("footer").load("/html/include/footer.html");
	})
});