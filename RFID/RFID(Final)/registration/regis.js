function valid(){
    var fn=document.getElementById('fname').value;
    var ln=document.getElementById('lname').value;
    var use=document.getElementById('username').value;
    var num=document.getElementById('number').value;
    var pass=document.getElementById('password').value;
    var repass=document.getElementById('retype_password').value;
    var nu=/^[6-9][0-9]{9}$/;
    var pw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,20}$/;
    var rpw=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,20}$/;
    var nf=/^[a-zA-Z.]{6,40}$/;
    var nl=/^[a-zA-Z.]{2,40}$/;
    var us=/^[a-zA-Z-_]{6,40}$/;
    
    
    if(use=='' || num=='' || pass=='' || repass=='' || fn=='' || ln=='')
    {
        swal({
            text:"Please enter all the fields",
            icon:"error"
        });
        return false;
    }
    else{
        if(nu.test(num) && rpw.test(repass) && pw.test(pass) && nf.test(fn) && nl.test(ln) && us.test(use)){
            var api_url = "http://localhost:3000/login";
                    var data = {
                        first_name: $('#fname').val(),
                        last_name: $('#lname').val(),
                        username: $('#username').val(),
                        password: $('#password').val(),
                        confirm_pass: $('#retype_password').val(),
                        phn_number: $('#number').val()
                    }
                    $.ajax({
                        url:api_url,
                        type:"POST",
                        dataType:"json",
                        data:JSON.stringify(data),
                        contentType:"application/json; charset=utf-8",
                        success:function(d){
                            swal({
                                text: "Your Account has been created successfully and please wait while we redirect you to Login page",
                                icon: "success",
                                button: false
                            });
                            setTimeout(function(){
                                window.location.href="./../admin/admin.html";
                            },5000);
                        },
                        error:function(jqxhr){
                            alert('Not working');
                        }
                    });
            
        }
        else{
            if(!nf.test(fn)){
                swal({
                    text: "Invalid First Name",
                    icon: "error",
                });
                return false;    
            }
            else if(!nl.test(ln)){
                swal({
                    text: "Invalid last Name",
                    icon: "error",
                });
                return false;    
            }
            else if(!us.test(use)){
                swal({
                    text: "Invalid Username",
                    icon: "error",
                });
                return false;
            }
           
            else if(!pw.test(pass)){
                swal({
                    text: "Invalid Password",
                    icon: "error",
                });
                return false;    
            }         
            else if(!rpw.test(repass)){
                swal({
                    text: "Invalid Confirm Password",
                    icon: "error",
                });
                return false;
            }
            else{
                swal({
                    text: "Invalid Phone Number",
                    icon: "error",
                });
                return false;
            }                     
        }
    }
}