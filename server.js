import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();

app.use("/public", express.static(path.join(__dirname, "public")));

// Serve the index.html file with the script for the Design.js file
app.get('/design', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"), {
        scripts: [{src: '/node_modules/drag-drop-touch/src/DragDropTouch.js', type: 'module'}]
    });
});

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "public","index.html"));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started on port 3000");
});
