var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use("/vendors",express.static(__dirname + "/vendors"));
app.use("/build",express.static(__dirname + "/build"));
app.use("/images",express.static(__dirname + "/images"));
app.use("/",express.static(__dirname));