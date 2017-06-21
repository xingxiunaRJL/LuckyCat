//当输入手机号文本框获取焦点时,placeholder改为'手机号是您登录的账户',失去焦点时改变成原来的值
$(function(){
	$('input[type="rel"]').on('click',function(){
		$('input[type="rel"]').attr('placeholder',' 手机号是您登录的账户');
	});
	$('input[type="rel"]').on('blur',function(){
		$('input[type="rel"]').attr('placeholder',' 请输入手机号码');
	});
//	点击下一步触发表单的提交事件
//	$('.next').on('tap',function(){
//		$('form').submit();
//		return false;
//	})
})
