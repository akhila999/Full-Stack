function valid(){
    
    var na = document.getElementById('name').value;
    var em = document.getElementById('email').value;
    var ph = document.getElementById('phonenumber').value;
    var te = document.getElementById('textarea').value;

    var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var n=/^[a-zA-Z.]{6,40}$/;
    var ta=/^[a-zA-Z0-9. ]{10,100}$/;
    var pn=/^[6-9][0-9]{9}$/;

    if( na ==' '||em=='' || ph=='' || te=='')
    {
        swal({
            text:"Please enter all the Fields",
            icon:"error"
        });
        return false;
    }
    else{
        if(e.test(em) && n.test(na) && ta.test(te) && pn.test(ph)){     
            
            var api_url = "http://localhost:3000/contact";
            var data = {
                name: $('#name').val(),
                email: $('#email').val(),
                phonenumber: $('#phonenumber').val(),
                textarea: $('#textarea').val()
            }
            
            $.ajax({
                url:api_url,
                        type:"POST",
                        dataType:"json",
                        data:JSON.stringify(data),
                        contentType:"application/json; charset=utf-8",
                        success:function(d){
                            swal({
                                text: 'Thanks for contacting....!',
                                icon: "success"
                            });
                            setTimeout(function(){
                                window.location.href="./../home/index1.html";
                            },5000);
                            
                        },
                        error:function(jqxhr){
                            alert('Not working');
                        }
            })
        }
        else{

            //alert("error")

            swal({
                text:'Please enter the valid details....',
                icon:'error'
            })
            return false;
        }
    }
}
