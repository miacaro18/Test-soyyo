const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const datas = require('../data.json');
const rango = require('../rango.json');

router.get('/', (req, res) => {
    res.json(datas);
}); 

router.get('/:startId/:endId',(req, res) => {
    const {startId} = req.params;
    const {endId} = req.params;

    if (startId > endId) {
        for(var a = endId; a <= startId; a++){
            console.log(a);
            _.each(datas, (date, i) => {
                if (date.data.entityId == a) {
                    const newData = {date};
                    rango.push(newData);
                }
            });
        };
    } else {
        res.status(404).json({error: 'Error no se encuentra para rango especificado'});
    }
    res.send(rango);
});


module.exports = router;