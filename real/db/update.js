const client = require('./pool');

const update = async(condition = {}, data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = collection.updateOne(condition, {'$set': data})

    return result;
}

module.exports = update;
