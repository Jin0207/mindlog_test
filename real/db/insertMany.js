const client = require('./pool');

const insertMany = async(data = [] ) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    const result = await collection.insertMany(data);

    return result;
}

module.exports = insertMany;
