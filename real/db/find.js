const client = require('./pool');

const find = async(data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    
    const result = await collection.find(data).toArray();

    return result;
}

module.exports = find;
