/*定义加载头部与尾部的模块*/
define(["jquery", "cookie"], function($){
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
			$(".firmenu").on("mouseenter", function(){
				$(".minmenu").css({display: "block"});
				var abc = 0;
				$(".minmenu").on("mouseenter", function(){
						abc = 1;
					});
				//console.log(abc);

				$(".firmenu").on("mouseleave", function(){
					setTimeout(function(){
						console.log(abc)
					if (abc) {
						return;
					}else{
						$(".minmenu").css({display: "none"});
					}
					},1000)
				});
			});
		});

		/*加载尾部*/
		$("footer").load("/html/include/footer.html");
	})
});