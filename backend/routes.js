const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Employee = require('./employee.js');



//GET Single Emloyee
router.get('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Employee.findById(req.params.id, (err, doc) => {
            if (err) {
                console.log('error in empoyee data' + err);
            } else {
                res.send(doc);
            }
        })

    } else {
        return res.status(400).send(`No record found with Id ${req.params.id}`);
    }
})



//Get api
router.get('/', (req, res) => {
    Employee.find((err, doc) => {
        if (err) {
            console.log('error in get data' + err);
        }
        else {
            res.send(doc);
        }
    })
})





//post Api
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    });

    emp.save((err, doc) => {
        if (err) {
            console.log('error in post data' + err);
        }
        else {
            res.send(doc);
        }
    })
})


//PUT aAPI
router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        let emp = {
            name: req.body.name,
            position: req.body.position,
            dept: req.body.dept
        }
        Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
            if (err) {
                console.log('error in UPDATE employye by id' + err);
            } else {
                res.send(doc);
            }
        })

    } else {
        return res.status(400).send(`No record found with Id ${ req.params.id }`);
    }
})



//DELETE Single Emloyee
router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log('error in DELETE employye by id' + err);
            } else {
                res.send(doc);
            }
        })

    } else {
        return res.status(400).send(`No record found with Id ${req.params.id}`);
    }
})



module.exports = router;