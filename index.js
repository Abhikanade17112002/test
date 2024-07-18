// require dotenv
require('dotenv').config()
const express = require("express")



const App = express() ;
App.set("view engine","ejs");
App.get("/",(request,response)=>{
    response.render("./index.ejs",{
        title:"Home Page",
    })
})


App.listen(process.env.PORT,()=>{
    console.log("server is running on port ",process.env.PORT);
})





