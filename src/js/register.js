//依赖配置
require(["config"], function(){
	//依赖配置中各短名称的模块
	require(["jquery", "load", "cookie"], function($){
		$(function(){
			var _phone,_password;
			$("#phone").on("focus",function(){
				// console.log(this);
				$(".phone").text(" ");
			});
			$("#phone").on("blur",function(){
				// console.log(this);
				_phone = this.value;
				var reg = /^[1][3,4,5,7,8]\d{9}$/;
				if(!reg.test(_phone)){
					$(".phone").text("请输入正确的手机号码");
				}
				else{
					$(".phone").text("");
				}
			});
			
			$("#password").on("focus",function(){
				$(".ps-one").text("");
			});
			$("#password").on("blur",function(){
				// console.log(this);
				_password = this.value;
				if(!_password){
					$(".ps-one").text("请输入密码");
				}else{
					$(".ps-one").text("");
				}
			});

			$("#password2").on("blur",function(){
				var _password2 = this.value;
				// console.log(_password,_password2);
				if(_password != _password2){
					$(".ps-two").text("两次输入的值不同");
				}else{
					$(".ps-two").text("");
				}
			});
			$("#apply").on("click",function(){

				$.cookie.json = true;
				var users = $.cookie("users")|| [];
				if(_phone && _password){
					console.log(users);
					var current = {
						username:_phone,
						password:_password
					};
					for(var k = 0;k < users.length;k++){
						if(_phone == users[k].username){
							alert("该用户已注册");
							return;
						}
					}
					alert("注册成功");
					users.push(current);
					$.cookie("users",users,{expires:7,path:"/"});
					$(location).attr("href","/html/login.html");
				}else{
					alert("请重新输入你的电话和密码");
				}
			});
		});
	});
});