const express = require('express');
const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../../config");
const { User } = require('../../db/models');

const router = express.Router();



const { secret, expiresIn } = jwtConfig;


const getUserToken = (user) => {
    // const userDataForToken = {
    //     id: user.id,
    //     email: user.email,
    // };
   
    // console.log( 'AAAAAA::::::', userDataForToken);

    // // Create the token.
    // const token = jwt.sign(
    //     { data: userDataForToken },
    //     secret,
    //     { expiresIn: parseInt(expiresIn, 10) }
    // );
    return token;
};

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll();
    return res.json({ users });
}));

// logging in
router.post(
    "/token",
    asyncHandler(async function (req, res, next) {
  
        const { email, password } = req.body;
        const user = await User.findOne({
            where: { email },
        });
       
        if (!user || !user.validatePassword(password)) {
            const err = new Error("Login failed");
            err.status = 401;
            err.title = "Login failed";
            err.errors = ["The provided credentials were invalid"];
            return next(err);
        }
        console.log("AAAAAAA")
        // const token = getUserToken(user);
         const userDataForToken = {
           id: user.id,
           email: user.email,
         };

         console.log("userDataForToken:::::", userDataForToken);

    

         // Create the token.
         const token = jwt.sign({ data: userDataForToken }, secret, {
           expiresIn: parseInt(expiresIn, 10),
         });

        console.log('token:::::', token);
        res.json({ token, user: { id: user.id } });
        
    })
);

module.exports = router;
