const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT||8000;
//public static path
const staticpath=path.join(__dirname,"../public");
const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticpath));//this will read static path whenever call and index.html 
// is a static path so for using partials change index with index1 or  other name because
//  it will read  that name only

// routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        error:"Opps!Page Not Found"
    });
})
app.listen(port,()=>{
    console.log("hello world");
})