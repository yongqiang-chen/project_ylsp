require.config({
	baseUrl : "/",  //最基准的，“/”代表项目的根
	paths : {
		jquery : "lib/jquery/jquery-1.12.4.min",
		artTemplate : "lib/artTemplate/template-web",
		cookie : "lib/jquery-plugins/jquery.cookie",
		fly : "lib/jquery-plugins/jquery.fly.min",
		zoom : "lib/jquery-plugins/jquery.elevateZoom-3.0.8.min", //放大镜
		load : "js/loadHeadAndFooter",
		play : "js/indexcarousel", //轮播
		login : "js/login",
		section : "js/section"

	},
	shim : {
		fly : {
			deps : ["jquery"] //依赖于jquery
		},
		zoom : {
			deps : ["jquery"]
		},
		play : {
			deps : ["jquery"]
		},
		login : {
			deps : ["jquery"]
		}
	}
});