$(function(){
	//设置每个页面的字体大小
	var w = $('html').width();
	var new_fs = w / 320 * 100 + 'px'; 
	$('html').css('font-size', new_fs);
	
})
$(function(){
//当点击菜单按钮时,自动切换是否隐藏
	$('#btn_menu').on('tap',function(){
		$('#menu').toggle();
	});
});