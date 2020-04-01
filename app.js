const express = require("express");
const app = express();


app.use(express.static("./public"));


app.get("*", (req,res)=> {
    res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 2021;
app.listen(PORT, ()=> console.log(`server started on ${PORT}`));