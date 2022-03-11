const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const datas = require('../data.json');

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    //const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/');
    const date = await response.json();
    if (date != 0) {
        //const newData = {date};
        //datas.push(newData);
        console.log(date);
        res.json(date);
    }
    else {
        res.status(400).json({error: 'Error en validación datos de entrada'});
    }
}); 

module.exports = router;