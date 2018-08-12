const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
module.exports = {

    /*parseJWT: function(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    },*/

    isEmpty: function(str) {
        return !str || 0 === str.length;
    },


    CheckUser: function(req, res, next) { // check header or url parameters or post parameters for token
        console.log(req.path);
        if (req.path == '/users/register') return next();
        if (req.path == '/users/login') return next();
        if (req.path == '/products/getAllProducts') return next();
        if (req.path == '/orders/setOrder') return next();




        let token = req.headers["x-access-token"];

        /*  if (req.path == '/products/updateProduct') {
              let user = this.parseJWT(token);

              if (user.user.email === 'admin@phoneshop.com') {
                  console.log("admin authorized");
              } else {
                  return res.json({
                      status: false,
                      message: "Admin authorization failed"
                  });
              }
          } */

        console.log("token header", req.headers["x-access-token"]);
        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, "secretforphoneshopapp", function(err, decoded) {
                if (err) {
                    return res.json({
                        status: false,
                        message: "Failed to authenticate token."
                    });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.json({
                status: false,
                message: "No token provided."
            });
        }

    }

};