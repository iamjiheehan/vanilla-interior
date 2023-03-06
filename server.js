const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname,"index.html"));
});

app.get('/design', (req, res) => {
    res.sendFile(path.resolve(__dirname,"index.html"), {
        scripts: [{src: '/node_modules/drag-drop-touch/DragDropTouch.js', type: 'module'}]
    });
});

app.get('/public/index.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.resolve(__dirname, 'index.js'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port 3000");
});
