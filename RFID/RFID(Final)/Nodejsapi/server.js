var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,x-Requested-With,Content-Type,Accept");
    next();
});

var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "udaY@123",
  database : "project"  
});

connection.connect((err)=>{
    if (!err){
        console.log('Database is connected...');
    }
    else{
        console.log('error is connecting database');
    }
});

app.listen(3000,()=>{
    console.log("server is running");
});
app.get('/uday',(res,req)=>{
    connection.query('select * from signin',(err, rows, field)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
    //res.json({msg:"welcome to node.js API"});
});




app.post('/register',(req,res)=>{
    let data = req.body;
    console.log(data);
    connection.query("Insert into signin set ?",data,function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"error ocurred"
            });
        }
        else{
            res.send({
                "code":200,
                "success":"User registration is completed"
            });
        }
    });
});

app.post('/login',(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    console.log(username,password);
    connection.query('select username,password from signin where username= ? and password= ? ',[username,password],function(error,results,fields){
        var x=JSON.stringify(results);
        if(x=="[]"){
            res.send({
                "code":400,
                "error":"can't find the username and password"
            });
        }
        else{
            res.send({
                "code":200,
                "success":"successful login"
            });
        }
    });
});






app.post('/feedback',(req,res)=>{
    let data = req.body;
    console.log(data);
    connection.query("Insert into feedback set ?",data,function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"error ocurred"
            });
        }
        else{
            res.send({
                "code":200,
                "success": " feedback is completed"
            });
        }
    });
});



app.post('/contact',(req,res)=>{
    let data = req.body;
    console.log(data);
    connection.query("Insert into quickcontact set ?",data,function(error,results,fields){
        if(error){
            res.send({
                "code":400,
                "failed":"error ocurred"
            });
        }
        else{
            res.send({
                "code":200,
                "success": " we will go through your message "
            });
        }
    });
});


