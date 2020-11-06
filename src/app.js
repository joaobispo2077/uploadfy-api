require('dotenv/config');

const app = require('./config/server');

const port = (process.env.SERVER_PORT || '3000');

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});