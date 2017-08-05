const express = require('express');
const router = express.Router();
const stud = require('../student');

//retreving details
router.get('/student', (req, res, next) => {
    //res.send('Retriving the Students list');
    stud.find(function (err, students) {
        res.json(students);
    })
});
//add record
router.post('/student', (req, res, next) => {
    console.log(req.body)
    //logic to add record
    let newStudent = new stud({
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        RollNumber: req.body.RollNumber,
        Age: req.body.Age,
        Gender: req.body.Gender

    });
    newStudent.save((err, student) => {
        if (err) {
            res.json({ msg: 'failed to add student details' });
            // return res.send();
        }
        else {
            res.json({ msg: 'Details added succesfully' });
        }
    });
});
module.exports = router;