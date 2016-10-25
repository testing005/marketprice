var http=require('http');
var port=9000;
var express=require('express');
var app=new express();
var market=require('steam-market-pricing');

app.listen(process.env.PORT||5000,function(){
	console.log("running on port 5000");
});

app.get("/",function(req,res){
	var name="wibbley";
	console.log(name);
	market.getItemPrice(570,name,function(err,data){
		if(!err){
			res.writeHead(200,{"Content-Type":"text/html"});
			res.write("<p>this is working</p>");
			res.write(name);
			res.write(data);
			res.end();
		}
	});

       
});
