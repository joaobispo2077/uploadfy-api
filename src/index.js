require('dotenv/config');
const express = require('express');

const app = express();

const port = (process.env.SERVER_PORT || '3000');

app.use(express.json());

app.listen(port, (req, res) => {
    console.log(`Server is running at port ${port}`);
});