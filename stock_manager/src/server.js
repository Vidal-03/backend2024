const express = require ('express');
const usersRoutes = require('./routes/users');
const staffRoutes = require('./routes/staff');
const suppliers = require('./routes/suppliers');
const products = require('./routes/products');
const products_suppliers = require('./routes/products_suppliers');
class Server {
    constructor(){
        
        this.app=express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }
    //Es importante ejecutarlo antes que el de routes 
    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/users', usersRoutes);
        this.app.use('/staff', staffRoutes);
        this.app.use('/suppliers', suppliers);
        this.app.use('/products', products);
        this.app.use('/products_suppliers', products_suppliers);
    }
    start(){
        this.app.listen(3000, () => {
            console.log('Server listening on port '+ this.port);
        });
        }
}
   
module.exports={Server};