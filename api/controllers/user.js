const mysql = require('mysql');
const bodyParser = require("body-parser");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const methods = require('../public/javascripts/methods');


//MYSQL
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "phshop"
});

const userController = {
    register(req, res) {
        if (
            methods.isEmpty(req.body.name) ||
            methods.isEmpty(req.body.email) ||
            methods.isEmpty(req.body.password)
        ) {
            return res.json({
                status: false,
                message: "All fields are required"
            });
        }

        bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
            let sql = `INSERT INTO users(name,email,pw) VALUES('${
              req.body.name
            }','${req.body.email}','${hash}')`;


            con.query(sql, function(err, result) {
                if (err) {
                    return res.json({
                        status: false,
                        message: "Please choose another email"
                    });
                }
                console.log("1 record inserted");
                let user_id = result.insertId;
                console.log(user_id);

                let query = `SELECT * FROM users WHERE id='${user_id}'`;
                console.log(query);

                con.query(query, (err, result) => {
                    if (err) {
                        return res.json({
                            status: false,
                            message: "Error occured, try again."
                        });
                    }
                    let user = result[0];
                    delete user.pw;
                    console.log(result[0]);
                    console.log(result)

                    //  create payload for JWT

                    const payload = {
                        user: user
                    };
                    // create token

                    let token = jwt.sign(payload, "secretforphoneshopapp", {
                        expiresIn: "24h" //expires in 24 hours
                    });

                    return res.json({
                        status: true,
                        user: user,
                        token: token
                    });
                });

            });

        });
    },

    login(req, res) {

        if (
            methods.isEmpty(req.body.email) ||
            methods.isEmpty(req.body.password)
        ) {
            return res.json({
                status: false,
                message: "All fields are required"
            });
        }

        let sql = `SELECT * from users where email='${req.body.email}'`;
        console.log(req.body.email);
        console.log(req.body);

        con.query(sql, function(err, result) {
            if (err) {
                return res.json({
                    status: false,
                    message: "Error occured"
                });
            }
            console.log(result);
            if (result.length == 0) {
                return res.json({
                    status: false,
                    message: "Sorry, wrong email"
                });
            }
            let user = result[0];
            let authenticated = bcrypt.compareSync(req.body.password, user.pw);
            delete user.pw;

            if (authenticated) {
                //  create payload for JWT
                const payload = { user: user };
                // create token

                let token = jwt.sign(payload, "secretforphoneshopapp", {
                    expiresIn: "24h" // expires in 24 hours
                });

                return res.json({
                    status: true,
                    user: user,
                    token: token
                });
            } else {
                return res.json({
                    status: false,
                    message: "Wrong Password, please retry"
                });
            }
        });

    },

    changeProfile(req, res) {
        console.log("changeProfile");




    },


}





module.exports = userController;