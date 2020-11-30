const express = require('express');

const app = express();

// Database Connection:
require('./model/db')();


// MiddleWares:
app.use(express.json());
app.use('/posts', require('./routes/postRoutes'));

// Port:
const port = process.env.PORT || 3000;

// Server Listening on Given Port:
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});