function KiemTra()
{
  var tdn = f.tendangnhap.value;
  var mk = f.matkhau.value;
  
  if(tdn =='')
  {
   alert('ten dang nhap khong duoc bo trong');
   return false;
  }
  if(mk == '')
  {
    alert('mat khau khong duoc bo trong:');
	return false;
  }
   return true;
}