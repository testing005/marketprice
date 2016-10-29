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
			 var pdata=[];
		      
		      
                        res.writeHead(200,{"Content-Type":"application/json"});
		//res.write("{ \"prices\" :{");
		for(var i in item) {
        //res.write(" "+"\""+item[i]+"\"" + ':' +"\""+data[item[i]]['median_price']+"\"");
			//pdata[item[i]]=data[item[i]]['median_price'];
			var obj={}
			obj["name"]=item[i];
			//obj["price"]=
				if(data[item[i]]['lowest_price']!=null){
					obj["price"]=data[item[i]]['lowest_price']}
		   		else{obj["price"]data[item[i]]["median_price"]};
			pdata.push(obj);
			//pdata["prices"].push(data[item[i]]["median_price"]);
		}
		 res.write(""+JSON.stringify(pdata));
		//res.write("}}");
			
			res.end();
		
	});

       
});
