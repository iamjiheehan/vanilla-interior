const express = require('express');
const path = require('path');
const app = express();

app.use("/src", express.static(path.join(__dirname, "src")));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "src","index.html"));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started on port 3000");
});