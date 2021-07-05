const http = require('http');
const mdbClient = require('mongodb').MongoClient;

let URL = "mongodb+srv://mdriaz:rGEdMnsrHkZw9Dr4@cluster0.4tyhn.mongodb.net?retryWrites=true&w=majority";

mdbClient.connect(URL, {useUnifiedTopology : true},function (error, con) {
    if (error){
        console.log('Connection failed');
    } else {
        console.log('Connection established');
        InsertData(con);
    }
})

function InsertData(con) {
    let mydb = con.db('school');

    let myCollection = mydb.collection('students');

    let data = {
        name: 'mdriaz',
        roll: '01',
        class: 'Diplomat',
        city: 'Bogura'
    }

    myCollection.insertOne(data, function (error){
        if (error){
            console.log('Data insert failed')
        } else {
            console.log('Data insert success')
        }
    });
}



const server = http.createServer(function (req, res) {

});

server.listen(5050);
console.log('http running');