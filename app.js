// jshint esversion:6

const express = require('express');
const bodyParser= require('body-parser');
const date=require(__dirname + "/date.js");

var items=["Ediiting", "Coding", "Typing Trainer"];
var work_items=[];


const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get('/', function(req, res){
let Today=date.getDate();
res.render('index',{ current_day: Today,items:items});

});


app.get('/work',function(req, res){
    res.render("index.ejs",{
    current_day:"Work-List",
    items:work_items
    });
})

app.get("/about",function(req, res){
    res.render("about.ejs");
})


app.post('/', function(req, res){
    
    let item=req.body.newItem;
    console.log(req.body.index)
    if (req.body.index==="Work-List"){
        work_items.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect('/');
    }
});
app.listen(process.env.PORT||3000,function(){
    console.log("Server Started listening on port 3000")
})