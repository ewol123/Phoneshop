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

const orderController = {

    setOrder(req, res) {

        let cart = JSON.parse(req.body.cart);
        let address = JSON.parse(req.body.address);
        let user = JSON.parse(req.body.user);
        let dateObj = new Date();
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        let newdate = year + "-" + month + "-" + day;


        cart.forEach(element => {
            let sql = `INSERT INTO orders (userId,orderDate,price,itemId,city,address,state,zip,name,email)VALUES(
            '${user[0].id}','${newdate}','${element.current_price}','${element.id}','${address[0].city}',
            '${address[0].address}','${address[0].state}','${address[0].zip}','${address[0].name}','${address[0].email}'
        );`;

            con.query(sql, (err, result) => {
                if (err) {
                    return res.json({
                        status: false,
                        message: "Failed to set orders, please contact us about your purchase!"
                    });
                }

            });

        });

        return res.json({
            status: false,
            message: "Order successful"
        });
    },
    getOrders(req, res) {

        let sql = `SELECT * FROM orders WHERE userId = ${req.params.id}`;

        con.query(sql, (err, result) => {
            if (err) {
                return res.json({
                    status: false,
                    message: "Failed to get orders! Please relog"
                });
            }

            let order = result;
            console.log(order);
            return res.json({
                status: true,
                message: "Loaded order history",
                orders: order
            });

        });

    }

}



module.exports = orderController;