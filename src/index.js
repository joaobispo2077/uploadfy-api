const express = require('express');

const app = express();

app.listen(3333, (req, res) => {
    console.log('Server is running at port 3333');
});