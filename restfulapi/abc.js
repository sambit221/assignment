const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
// console.log(req.url);
if (req.url = "/") {
res.end("Hello from the home sides");

} else if (req.url = "/about") {
res.end("Hello from the AboutUS sides");

} else if (req.url = "/contact") {
res.end("Hello from the contactUS sides");

} else if (req.url = "/userapi") {
fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
    console.log(data);
});
res.end("Hello from the userAPI sides");
} else {
res.writeHead(404, { "Content-type": "text/html" });
res.end("<h1> 404 error pages. Page doesn't exist </h1>")
}
})