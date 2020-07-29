var mysql=require('project');
const { createBrotliCompress } = require('zlib');

var con= mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "udaY@123",
  database : "project"
})

con.connect(function(err){
    if(err)throw err;
    con.query("insert into signup(first_name, last_name, create_user, create_pass, confirm_pass, phn_number)values('abcd','ssdfd','user','uday','uday','9797956543')")
    if(err)throw err;
    console.log("1 entry added")
})