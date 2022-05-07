const http = require("http");
const fs = require("fs");

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const server = http.createServer(async (request, response) => {
  switch (request.url) {
    /*    case "/favicon.ico":
      // const dataIcon = fs.readFileSync("pages/about.html");
      console.log("Favicon loaded!");
      break; */
    case "/":
    case "/home":
      const dataHome = await readFile("pages/home.html");
      response.write(dataHome);
      response.end();
      break;
    case "/about":
      const dataAbout = await readFile("pages/about.html");
      response.write(dataAbout);
      response.end();
      break;

    default:
      response.write("404 Note Found");
      response.end();
  }
});

server.listen(3003);
