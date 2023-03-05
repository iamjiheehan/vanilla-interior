const express = require('express');
const mime = require('mime');
const path = require('path');

const app = express();
const __dirname = path.resolve();

// Serve static files from the public folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Serve JavaScript file with correct MIME type
app.get('/public/index.js', (req, res) => {
    const filePath = path.resolve(__dirname, 'public', 'index.js');
    res.set('Content-Type', 'text/javascript');
    res.sendFile(filePath);
});


// Serve the index.html file with the script for the Design.js file
app.get('/design', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"), {
        scripts: [{src: '/node_modules/drag-drop-touch/DragDropTouch.js', type: 'module'}]
    });
});

// Serve index.html for all other routes
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public","index.html"));
});

// Start server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});
