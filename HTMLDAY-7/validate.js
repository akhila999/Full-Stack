 function validate() 
var result = "";
 result += validateName();
  result += validateEmail();
   result += validatePassword(); 
   result += validate Terms();

if (result == "") return true;

alert("Validation Result:\n\n" + result);
 return false;
}
function validateName() { 
    var name = document.getElementsByName("name")[0].value;
     If (name. length <= 3) 
     return "Name should be at least three characters. \n";
return"" ;

function validatePassword(){ 
    var password = valueof("password");
     var retype = valueOF{"retype_password");

if (password.length <= 6)
 return "Password should be at least 6 characters. \n";

if (password != retype) 
return "Passwords do not match. \n";

return "" ;
 }
Function validate Email() {
     var email = valueOf("email");
     var retype = valueOf("retype_email");

If (email.indexOf('@') == -1)
return "Email should be a valid address.\n";

If (email != retype) 
return "Email addresses do not match. \n";

return "" ;
}
function validate Terms() {
    var terms = document.getElementsByName("terms")[0];
     if (!terms.checked) 
     return "Please accept the Terms of Service and Privacy Policy";

return "";
}
function valueOf(Name) { 
   return document.getElementsByName( name) [0].value;
}
