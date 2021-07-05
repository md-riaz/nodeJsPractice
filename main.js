const http = require('http');
const mdbClient = require('mongodb').MongoClient;

let URL = "mongodb+srv://mdriaz:rGEdMnsrHkZw9Dr4@cluster0.4tyhn.mongodb.net?retryWrites=true&w=majority";

mdbClient.connect(URL, {useUnifiedTopology : true},function (error) {
    if (error){
        console.log('Connection failed');
    } else {
        console.log('Connection established')
    }
})

const server = http.createServer(function (req, res) {

});

server.listen(5050);
console.log('http running');