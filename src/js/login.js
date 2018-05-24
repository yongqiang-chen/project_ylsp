//依赖配置
require(["config"], function(){
	//依赖配置中各短名称的模块
	require(["jquery", "load", "cookie"], function($){
		$.cookie.json = true;
		var users = $.cookie("users");
		console.log(users);
		var _phone,_password;
		
		$("#phone").on("focus",function(){
			$(".phone").text("");
		});
		$("#phone").on("blur",function(){
			_phone = this.value;
			if(!_phone){
				$(".phone").text("请输入手机号");
			}
		});

		$("#password").on("focus",function(){
			$(".password").text("");
		});
		$("#password").on("blur",function(){
			_password = this.value;
			if(!_password){
				$(".password").text("请输入密码");
			}
		});
		$(".submit").on("click",function(){
			var _user = lookup(_phone,users);
			if(_user == -1 || users[_user].password != _password){
				alert("账号或密码错误");
			}else{
				alert("登录成功");
				$.cookie("username",_phone,{path:"/"});
				$(location).attr("href","/index.html")
			}
		});
		function lookup(_phone,users){
			for(var a in users){
				if(users[a].username == _phone){
					return a;
				}
				return -1;
			}
		}
	});
});