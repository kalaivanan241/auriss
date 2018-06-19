const express = require('express')
const router = express.Router();
const jwt  = require('jsonwebtoken');
const _ = require('underscore');
const Joi = require('joi');

const fs = require('fs');

const schema = 
    {
        username: Joi.required(),
        password: Joi.required(),
    };

router.post('/login',  (req, res) => {
    const result = Joi.validate(req.body, schema);                          // validating body of request 
    if(result.error) res.status(400).send(result.error.details[0].message); // if not valid throwing 400 error
    fs.readFile('user.json', (err, data) => {                                // fetching data from json file
        const users = JSON.parse(data);
        let flag = false;
        console.log(req.body);
            users.forEach(element => {
                console.log(element);
                // looping through data fetch from json and validating user credential
                if(element.username == req.body.username && element.password == req.body.password) {
                    const token = jwt.sign({'username': element.username},'token');
                    // once user is verified attaching jwt to res header
                    res.header('x-auth-token',token).send({username: element.username, token: token});
                    flag = true;
                }     
            });
            if(flag === false ) {
                // if user crendentials are wrong send 400 error response 
                res.status(400).send('username or password is wrong');
            }
    });
})

module.exports = router;
