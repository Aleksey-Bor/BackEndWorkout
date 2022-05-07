const http = require("http");
const fs = require("fs");
// const { resolve } = require("path");
// const { rejects } = require("assert");
// const { isAbsolute } = require("path");
/* 
let readFile = new Promise((resolve, reject) => {

}); */
// document.querySelector('link[rel="shortcut icon"]').href =
//   "./icons/favicon.ico";

const server = http.createServer((request, response) => {
  switch (request.url) {
    /*    case "/favicon.ico":
      // const dataIcon = fs.readFileSync("pages/about.html");
      console.log("Favicon loaded!");
      break; */
    case "/":
    case "/home":
      fs.readFile("pages/home.html", (err, data) => {
        if (err) {
          response.write("500, some error");
        } else {
          response.write(data);
        }
        response.end();
      });
      break;
    case "/about":
      fs.readFile("pages/about.html", (err, data) => {
        if (err) {
          response.write("500, some error");
        } else {
          response.write(data);
        }
        response.end();
      });
      break;

    default:
      response.write("404 Note Found");
      response.end();
  }
});

server.listen(3003);
