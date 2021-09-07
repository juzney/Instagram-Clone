const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('./database/db');
const path = require('path');
const cors = require('cors');

const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use((req, res, next)=>{
	req.io = io;

	next();
})

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, "..", "uploads")))
app.use(express.json());
app.use(require('./routes/postRoutes'))



const PORT = process.env.PORT || 3003;

app.listen(PORT, ()=> console.log('server running on port', PORT));
