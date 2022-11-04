const { morganLoader } = require('./morgan')
const { expressLoader } = require('./express')

const init = async (expressApp) => {
    await morganLoader(expressApp);
    console.log('Morgan Intialized');

    await expressLoader(expressApp);
    console.log('Express Intialized');
}

module.exports = {init}