var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.send('ok')

});

app.get('/test', (req, res) => {
    res.send({status:200, message:"ok"})

});

app.get('/time', (req, res) => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getSeconds();
    res.send({status:200, message:time})

});

app.get('/hello/:ID', (req, res) => {
    res.send({status:200, message:`hello ${req.params.ID}`})
    });

    app.get('/search',(req,res) => {
         if(req.query.s !== "")
         { 
             res.send({status:200, message:"ok", data:req.query.s}) 
            } 
            else { 
                res.send({status:500, error:true, message:"you have to provide a search"}) 
            } })    

app.listen(3000, () => console.log('listinig on port 3000'))