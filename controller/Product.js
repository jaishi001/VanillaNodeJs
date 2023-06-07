const Product = require('../model/Product');
const respond = require('../util/respond');

async function getAllProducts(req,res){
    try {
        const product = await Product.findAll();
         if(!product){
            return respond(res,{});
        }
        respond(res,product);
    } catch (error) {
        console.log(error.code,error.message);
    }
}

async function getProductById(req,res,_id){
    try {
        const product = await Product.findById(_id);
        if(!product){
           return respond(res,{});
        }
        respond(res,product);
        
    } catch (error) {
        console.log(error.code,error.message);
    }
}


async function create(req,res){
    try {

        //while sending static data 
        // const newProduct = {
           
        //     name:'Aquarium',
        //     description:'Keeps fish alive when filled with water'
        // }

        // const product = await Product.create(newProduct);
        // respond(res,product);


        //users send products data from forms , lets capture form data , data from form body

        let body = ''; // We receives body as string from form data

        //Cateches Errors
        req.on('error',function(err){
            console.log(err);
        });

        //Receive form data as chunks and concate them in single string
        req.on('data',function(chunk){
            // console.log(chunk,'chunk data');
            //Example of Chunk Data : <Buffer 7b 0d 0a 20 20 20 20 22 6e 61 6d 65 22 3a 22 53 61 6e 69 74 69 7a 65 72 22 2c 0d 0a 20 20 20 20 22 64 65 73 63 72 69 70 74 69 6f 6e 22 3a 22 50 72 65 ... 33 more bytes>
             body+= chunk; // body = body+chunk;
            //  console.log(body,'body'); 
            //=>
            // {
            //     "name":"Sanitizer",
            //     "description":"Prevents From Germs Transmission"
            // }


            
        });

        req.on('end',async function(){

            //Converting string data to js objects and destructure that array, 
            const {name,description} = JSON.parse(body) 
            // console.log(name,'name') //=>  Sanitizer name
           const newProduct = {name,description};
           const product  = await Product.create(newProduct);
           respond(res,product);

        });


        
    } catch (error) {
        console.log(error.code,error.message);
        
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    create
}