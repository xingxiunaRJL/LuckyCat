//轮播图 start
$(function(){
window.mySwipe = Swipe(document.getElementById('slider'),{
			auto:2000,
			containus:true,
			callback: function(index, elem) {
				$('.indirector li').eq(index%2).addClass('current').siblings().removeClass('current');
			},
		});
})
//轮播图 end