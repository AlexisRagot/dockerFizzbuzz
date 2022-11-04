const http = require('http');
const {fizzbuzz} = require("./fizzbuzz");

const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");

    let url, queryString;
    [url, queryString] = req.url.split('?');

    const urlSearchParams = new URLSearchParams(queryString)
    const params = Object.fromEntries(urlSearchParams.entries());

    switch (url) {
        case "/fizzbuzz":
            res.writeHead(200);
            res.end(JSON.stringify(fizzbuzz(parseInt(params.size, 10) || undefined)));
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});