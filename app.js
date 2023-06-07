const http = require("http");
const { routesHandler } = require("./routes/Product");


//Creating Server
const httpServer = http.createServer(function (request, response) {
  // response.statusCode = 200;
  // response.setHeader('Content-Type','text/html');

  // if (request.url === '/api/products' && request.method === 'GET') {
  //   getAllProducts(request,response);
  // }else{
    // response.writeHead(200, { "Content-Type": "application/json" });
    // response.end(JSON.stringify({message:`No Such Route ${request.url} Found!`}));
  // }

  routesHandler(request,response);

});

//Listening Server in Port 3000
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, function () {
  console.log(`Server Running In Port ${PORT}`);
});
