/*********************************************************
 页面加载完之后,
currentValue(当前投资的人数),假定总数为100;
进度条的宽度 = currentValue/100*进度条的总宽
进度条的当前值为currentvalue + '%';
当前值的定位坐标从 left:(-自身宽度/2) → → 进度条的宽度-自身宽度/2;
*********************************************************/
$(function(){
	var currentValue = 40;
	var w_pro = currentValue/100* $('.progress div').width();
	var w_cur = $('.progress div em').width()/2;
	$('.progress div span').animate({'width':w_pro},500);
	$('.progress div em').html(currentValue + '%');
	$('.progress div em').animate({'left': (w_pro - w_cur)},500);
	$('.progress p .numb').html(currentValue);
})
