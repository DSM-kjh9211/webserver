const express = require('express');
require('dotenv').config({path:".env"});

const app = express();

app.get("/", (req,res) => {
    res.send("Hello, World!");
});

//query
app.get("/query", (req,res) => {
    const query = req.query;
    res.send(`당신이 보낸 쿼리: ${JSON.stringify(query,null,2)}`);
});

app.listen(process.env.PORT);