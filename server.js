const http = require('http');

const dataContrl = (req, res) => {
    res.write("<h1>hello, This is a <em>boy</em> </h1>")
    res.end();
}
http.createServer(dataContrl).listen(4500);

