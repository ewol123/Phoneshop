const mysql = require('mysql');
const bodyParser = require("body-parser");
const methods = require('../public/javascripts/methods');



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
};



module.exports = productController;