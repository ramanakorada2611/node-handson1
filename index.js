const http=require("http")

http.createServer(function(req,res){
    console.log("this is first backend handson ")
    res.write("<h1><center>hello! everyone</center></h1>")
    res.end()
}).listen(5000,function(res,req){
    console.log("server is running at port at 5000")
})