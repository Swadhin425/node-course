const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    fs.readFile(
      path.join(path.dirname(__dirname), "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {

        var  json={title:"user1"}
        fs.readFile(
            path.join(path.dirname(__dirname), "public", "about.html"),
            (err, content) => {
              if (err) throw err;
              res.writeHead(200, { "Content-Type": "text/html" });
      
             content += `${json.title}`
              res.end(content);
            }
          );
    
 
  }
  if (req.url === "/contact") {
    fs.readFile(
      path.join(path.dirname(__dirname), "public", "contact.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/api/users") {
    var users=[
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"},
        {id:1,name:'xyz',email:"dhidd@gmail"}
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users) );
  }
});

server.listen("4003", function () {
  console.log("server started");
});
