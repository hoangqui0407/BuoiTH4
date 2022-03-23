function Kiemtra()
{
	var ht= f.hovaten.value;
	var dc= f.diachi.value;
	var e= f.email.value;
	var dt= f.dienthoai.value;
	var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if(ht =='')
	{
		alert('họ tên không được bỏ trống');
		return false;
	}
	if(dc =='')
	{
		alert('địa chỉ không được bỏ trống');
		return false;
	}
	if(e =='')
	{
		alert('email không được bỏ trống');
		return false;
	}
	if(dt =='')
	{
		alert('điện thoại không được bỏ trống');
		return false;
	}
	if(!emailPattern.test(e))
	{
		alert('email không hợp lệ ');
		return false;
	}
	return true;
}
