function respond(res,...rest){

     res.writeHead(200,{'Content-Type':'application/json'});
     res.end(JSON.stringify(rest[0]));

}
module.exports = respond;