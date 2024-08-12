const fs = require("fs");
const requesthandeler= (req,res) =>{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('./massage.txt', (err, data) => {
            let string = '';
            if (!err && data) {
                string = data.toString();
            }

            res.setHeader('Content-Type', 'text/html');
            res.write(`
                <html>
                <head><title>Write</title></head>
                <body>
                    <h1>${string}</h1>
                    <form action="/massage" method="POST">
                        <input type="text" name="massage">
                        <button>Submit</button>
                    </form>
                </body>
                </html>
            `);
            return res.end();
        });
    } else if (url === '/massage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const massage = parsedBody.split('=')[1];
            fs.writeFile('massage.txt', massage, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
}
module.exports=requesthandeler;