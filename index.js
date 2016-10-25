var http=require('http');
var port=9000;
var express=require('express');
var app=new express();
var market=require('steam-market-pricing');

app.listen(process.env.PORT||5000,function(){
	console.log("running on port 5000");
});

app.get("/",function(req,res){
	var name=req.param('name');
	market.getItemPrice(570,name,function(err,data){
		if(!err){
			res.json(data);
		}
	});

       
});
