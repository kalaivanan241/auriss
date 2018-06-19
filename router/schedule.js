const express = require('express')
const router = express.Router();
const Joi = require('joi');
const fs = require('fs');

const schema = {
    scheduler : Joi.required(),
    appointmentWith : Joi.required(),
    time : Joi.required(),
}

router.post('/' , validateUser, (req, res, next) => {
  
    // reading data from json file
    fs.readFile('schedule.json',(err,data) => {
        if(err) res.status(500).send('server side error');
        schedules = JSON.parse(data);
        schedules.push(req.body);
            //writing into file after updating json
        fs.writeFile('schedule.json', JSON.stringify(schedules), (err) => {
            if(err) res.status(500).send('server side error');
            res.status(200).send(schedules);
        })
    });
})


//checking accessibility of post req
function validateUser(req, res, next) {
    if(req.user.username === 'abcd') next();
    else res.status(400).send('access denied');
}

router.get('/', (req, res) => {
    // reading file and sending json data 
    fs.readFile('schedule.json', (err, data) => {
        if(err) res.status(500).send('server side error');
        res.send(JSON.parse(data)); 
    });
})


module.exports = router;
