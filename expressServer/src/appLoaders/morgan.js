var morgan = require('morgan')

const morganLoader = async (app) => {
    app.use(morgan('dev', {
        skip: function (req, res) { return res.statusCode < 400 }
    }))
}

module.exports = {morganLoader}