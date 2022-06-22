const { MongoClient } = require('mongodb');
const url = 'mongodb://mongo:mongo123@localhost:27017/admin';

const client = new Promise((resolve, reject) => {
    MongoClient.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology: true
    }), (err, client) => {
        if (err) {
            reject(err);
            return
        }

        resolve(client);
    }
});

module.exports = client;