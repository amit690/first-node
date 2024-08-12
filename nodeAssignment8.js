const http = require("http");
const handeler=require('./routes')

const server = http.createServer(handeler);

server.listen(4000);
