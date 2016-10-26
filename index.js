var http=require('http');
var port=9000;
var express=require('express');
var app=new express();
var market=require('steam-market-pricing');

app.listen(process.env.PORT||5000,function(){
	console.log("running on port 5000");
});

app.get("/price",function(req,res){
	var name=req.query.name;
	console.log(name);
	market.getItemPrice(570,name,function(err,data){
		if(!err){
			res.writeHead(200,{"Content-Type":"application/json"});
			res.write("{\"price\""+":"+\"data.median_price\"+"}");
			res.end();
		}else{
		res.write(err);
		}
	});

       
});
