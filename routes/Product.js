const { getAllProducts, getProductById, create } = require("../controller/Product");

function routesHandler(request,response){

    const url = request.url;
    const method = request.method;
    // const numRegex = /\d/;

    // switch(method){
        

    //     case 'GET' && url === 'api/products':
    //         getAllProducts(request,response);
    //     break;

    //     case 'GET' && url.match(/\/api\/products\/([0-9]+)/):
    //         const _id = url.split('/')[3];
    //         console.log(url);
    //         getProductById(request,response,_id);
        
    //     break;

        

    //     default:
    //     response.writeHead(200, { "Content-Type": "application/json" });
    //     response.end(JSON.stringify({message:`No Such Route ${request.url} Found!`}))
    //     break;
    // }

    if(url==='/api/products' && method === 'GET'){
        getAllProducts(request,response)
    }
    else if(url.match(/\/api\/products\/([0-9]+)/) && method==='GET'){
        const _id = url.split('/')[3];
        getProductById(request,response,_id);
    }else if(url.match('/api/products') && method === 'POST'){
        create(request,response)
    }

}


module.exports={routesHandler};