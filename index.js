let express = require('express');

let app = express();

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`the server is working on port ${port}`));

