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
	var item=name.split(",");
	var items[];
         item.forEach(item){items.push(item);}
	res.write(Buffer.from(items));
	//console.log(items);
	var test={"name":"nodejstesting","host":"heroku"};
	res.write(JSON.stringify(test));
	//res.write(items);
	market.getItemsPrice(570,items,function(err,data){
		if(!err){console.log(data);
                        res.writeHead(200,{"Content-Type":"application/json"});
			res.write(Buffer.from(data));
			res.end();
		}else{
		res.write("err");
		}
	});

       
});
