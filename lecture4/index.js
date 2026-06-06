let express=require("express");
// console.log(express);
let app=express();
// console.log(x);
app.get("/",(req,res)=>{
    console.log("hello anshika");
    res.send("hello anshika11")
})
app.get("/payment",(req,res)=>{
    console.log("hiii 1");
    res.send("hii 2")
})
app.get("/services",(req,res)=>{
    console.log("service on server side")
    res.send("client service paage")
})
app.get("*",(req,res)=>{
    console.log("user not found");
    res.send("404 page not found")
})
app.listen(port,()=>{

})
app.listen(3000);