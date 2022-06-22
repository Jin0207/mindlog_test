const client = require('./pool');

const insert = async (data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = await collection.insertOne(data);
    
    return result;
}

module.exports = insert;
