const mysql = require('mysql');
const bodyParser = require("body-parser");
const methods = require('../public/javascripts/methods');


//MYSQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "phshop"
});


const productController = {
    getAll(req, res) {
        let sql = `SELECT * FROM products INNER JOIN manufacturers ON products.manufacturerId = manufacturers.manId;`;

        con.query(sql, (err, result) => {
            if (err) {
                return res.json({
                    status: false,
                    message: "Failed to get data from server, please relog"
                });
            }
            console.log(result);

            return res.json({
                products: result,
                status: true,
                message: "Successfully loaded data"

            });

        });
    },
    addProduct(req, res) {

        if (methods.isEmpty(req.body.name) ||
            methods.isEmpty(req.body.price) ||
            methods.isEmpty(req.body.manufacturer) ||
            methods.isEmpty(req.body.image) ||
            methods.isEmpty(req.body.discount) ||
            methods.isEmpty(req.body.description)
        ) {
            return res.json({
                success: false,
                message: "Error occured (fields are empty)"
            });
        }

        let sql = `INSERT INTO products(name,price,image,description,manufacturerId,discount) VALUES(
       '${req.body.name}',
       '${req.body.price}',
       '${req.body.image}',
       '${req.body.description}',
       '${req.body.manufacturer}',
       '${req.body.discount}'
    ); `;

        con.query(sql, (err, result) => {
            if (err) {
                return res.json({
                    status: false,
                    message: "Error inserting new item."
                });
            }

            return res.json({
                status: true,
                message: "Insert successfull"
            });

        });
    },

    deleteProduct(req, res) {
        if (methods.isEmpty(req.params.id)) {
            return res.json({
                status: false,
                message: "Error occured please relog(id is empty)"
            });
        }
        let sql = `DELETE FROM products WHERE id='${req.params.id}';`;

        con.query(sql, (err, result) => {
            if (err) {
                return res.json({
                    status: false,
                    message: "Error occured when deleting data"
                });
            };


            return res.json({
                status: true,
                message: "Successfully deleted"
            });

        });
    },

    updateProduct(req, res) {

        if (methods.isEmpty(req.body.id) ||
            methods.isEmpty(req.body.name) ||
            methods.isEmpty(req.body.price) ||
            methods.isEmpty(req.body.manufacturer) ||
            methods.isEmpty(req.body.image) ||
            methods.isEmpty(req.body.discount) ||
            methods.isEmpty(req.body.description)
        ) {
            return res.json({
                status: false,
                message: "Error occured (fields are empty)"
            });
        }



        let sql = `UPDATE products SET 
          name ='${req.body.name}',
          price ='${req.body.price}',
          image='${req.body.image}',
          description='${req.body.description}',
          manufacturerId='${req.body.manufacturer}',
          discount='${req.body.discount}'
          WHERE id ='${req.body.id}';`;


        con.query(sql, (err, result) => {
            if (err) {
                return res.json({
                    status: false,
                    message: "Error while updating product"
                });
            }

            return res.json({
                status: true,
                message: "Update successful!"
            });

        });

    }
};



module.exports = productController;