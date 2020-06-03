function validate()
{
    var mob=document.getElementById("txtmob").value;
    var roll=document.getElementById("txtroll").value;
    var email=document.getElementById("txtemail").value;
    var us=document.getElementById("txtus").value;
   var m=/^[6-9][0-9]{9}$/;
  var  r=/^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
  var e= /^[a-zA-Z0-9_.-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}/  ;
  var u=/^[a-zA-Z0-9]{6,12}$/;
  if(mob==""||roll==""||email ==""||u=="")
  {
      window.alert("enter the fields");
      return false;
  }
  else{
if(m.test(mob)&&r.test(roll)&&e.test(email)&&u.test(us))
{
    window.alert("valid");
    return true;

}
else{
    window.alert("invalid");
    return false;
}
  }
}