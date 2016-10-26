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
	var item=name.split(",");
	market.getItemsPrice(570,item,function(data){
		console.log(data);
			 
                        res.writeHead(200,{"Content-Type":"application/json"});
		res.write("{ \"prices\" :{");
		for(var i in item) {
        res.write(" "+"\""+item[i]+"\"" + ':' +"\""+data[item[i]]['median_price']+"\"");
    }
		res.write("}}");
			
			res.end();
		
	});

       
});
