const fs = require('fs')
const path = require('path');
const data = fs.readFileSync('../server/data.json', 'utf8');
exports.dataController = (req, res) => {
    console.log("data", data)
    res.json(JSON.parse(data))
}