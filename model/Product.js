const Products = require("../data/product.json");
const {v4 : uuidv4 } = require('uuid');
const writeToFile = require("../util/writeToFile");

function findAll(){
    return new Promise(function(resolve,reject){
        resolve(Products)
    })
}

function findById(_id){
    const id = parseInt(_id);
    return new Promise(function(resolve,reject){
        const product = Products.find((row)=>row.id==id);
        resolve(product);
    })
}


function create(producData){

    return new Promise(function(resolve,reject){
        const product = {

            id:uuidv4(), 
            ...producData
        };
        Products.push(product);
        writeToFile('./data/product.json',Products);
        resolve(product)
    })
}


module.exports = {
    findAll,
    findById,
    create
}
