const express = require('express');
const app = express();
const connectToDB = require('./db/index');
const PORT = 3000;

connectToDB();

app.listen(PORT, console.log("server is listening on port",PORT));