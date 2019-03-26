//隐藏弹框
function hideActionSheet() {
	$('#iosActionsheet').removeClass('weui-actionsheet_toggle');
	$('#iosMask').fadeOut(200);
}
//显示弹出框
function showActionSheet() {
	$('#iosActionsheet').addClass('weui-actionsheet_toggle');
	$('#iosMask').fadeIn(200);
}
//跳转到地址界面
function address() {
	window.location.href = 'address.html'
}

//跳转到兴趣页面
function Interest() {
	window.location.href = 'interest.html'
}

$('#iosMask').on('click', hideActionSheet);
$('#iosActionsheetCancel').on('click', hideActionSheet);
$("#showIOSActionSheet").on("click", showActionSheet);