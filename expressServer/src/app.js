const express = require('express')
const loaders = require('./appLoaders')

async function startServer() {

    const app = express();
    await loaders.init(app);

    const PORT = 8081
    const HOST = '0.0.0.0';

    app.listen(PORT, HOST, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

startServer();



