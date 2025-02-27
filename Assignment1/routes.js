const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
        
    if(url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title> Welcome </title>
                </head>
                <body>
                    <h1> Welcome to the home page! </h1>
                    <form action="/add-user" method="POST">
                        <input type='text' name='fname' placeholder='FirstName'>
                        <input type='text' name='sname' placeholder='SecondName'>
                        <button type="submit"> Add User </button>
                    </form>
                    <a href='/users'> View User </a>
                </body>
            </html>
        `);    
        res.end();
    }

    if(url === '/add-user' && method === 'POST'){
        const name = [];
        req.on("data", (chunk) => {
            name.push(chunk);
        })        

        return req.on("end", () => {
            // console.log(name);
            const parsedBody = Buffer.concat(name).toString().replace(/\+/g, ' ');
            // console.log(parsedBody);
            let fullName = parsedBody.split('&');
            const fname = fullName[0].split('=')[1];
            const sname = fullName[1].split('=')[1];
            fullName = fname + ' ' + sname;


            // console.log(message);

            if(!fname || !sname){
                res.writeHead(400, {"Content-Type":"text/plain"});
                return res.end("Error! Enter a name");
            }

            fs.readFile('names.txt', (err,data) => {
                
                const names = data.toString();
                const arr = names.split('\n');
                
                if(arr.includes(fullName)){
                    res.statusCode = 400;
                    return res.end(`User Already Exists`);
                }
                else{
                    fs.appendFile("names.txt", fullName + '\n', (err) => {
                        if (err) {
                            console.error(err);
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'text/html');
                            res.write('<h1>Internal Server Error</h1>');
                            return res.end();
                        }
                        res.statusCode = 302;
                        res.setHeader('Location', '/');
                        return res.end();
                    });
                }               
                
            });
            
        }) 
    }

    if(url === '/users'){
 
        fs.readFile('names.txt', (err,data) => {
            
            // console.log(data);
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>Error reading file</h1>");
                return;
            }

            if(data.length === 0){
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                return res.end(`
                    <html>
                        <body>
                            <script>
                                alert("No Users Found! Enter a new user");
                                window.location.href = "/";
                            </script>
                        </body>
                    </html>
                `);
            }
            
            // console.log(data.toString());
            // console.log(names);            
            let arr = data.toString().split('\n');
            if(arr[arr.length-1]==='') arr.pop();

            arr = arr.map((curr)=> curr.split(' '));
            
            class FullNames{
                constructor(fname, sname){
                    this.fname = fname;
                    this.sname = sname;
                }
            };
    
            arr = arr.map( ([fname,sname]) => new FullNames(fname,sname));

            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(arr));   
        });        
    }
}
module.exports = requestHandler;