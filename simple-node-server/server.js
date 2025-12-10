const http = require("http");

const server =http.createServer((req, res) => {
console.log(req)
}).listen(3000, () => {
  console.log("Server started on port 3000");
});
