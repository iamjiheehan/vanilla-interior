const express = require('express');
const path = require('path');
const app = express();

app.use("/src", express.static(path.join(__dirname, "src")));


// Serve the index.html file with the script for the Design.js file
app.get('/design', (req, res) => {
    res.sendFile(path.resolve(__dirname, "src", "index.html"), {
        scripts: [{src: '/node_modules/drag-drop-touch/src/DragDropTouch.js', type: 'module'}]
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "src","index.html"));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started on port 3000");
});
