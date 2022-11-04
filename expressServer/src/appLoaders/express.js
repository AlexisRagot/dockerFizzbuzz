const serviceRoutes = require("../routes/index");

const expressLoader = async (app) => {
    app.get('/status', (req, res) => { res.status(200).end()})
    app.head('/status', (req, res) => { res.status(200).end()})

    app.use('/', serviceRoutes)

}

module.exports = {expressLoader}