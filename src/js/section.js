define(["jquery"], function($){
	$(function(){//通过ajax

		$("section").load("/html/include/section.html", function(){
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
					// $("#min_2").children().children()[0].src = "../imgs/food (2).jpg"
				}
			})
		});
	})
});