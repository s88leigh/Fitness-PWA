const path = require('path')
const fs = require('fs')
const router = require("express").Router();

router.get('/exercise', ({ body, params }, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

router.get('/stats/', (req, res) => {
    fs.readFile(path.join(__dirname, '../public/stats.html'), 'utf8', function (error, file) {
        if (error) {
            res.sendStatus(404)
        }

        res.send(file)
    })
})

module.exports = router

// var math = {
//     add: function (x, y, callback) {
//         orm.add(x, y, callback)
//     }
// }

// var orm = {
//     add: function (x, y, callback) {
//         if(x < y){
//             return callback("X is smaller than y", null)
//         }
//         callback(false, x + y)
//     }
// }

// math.add(14, 5, function (err, batman) {
//     if(err) return console.log(err)
//     console.log(batman)
// })