const client = require('./pool');

const deleteOne = async(data = {}) => {
    const db = (await client).db('test');
    const collection = db.collection('mongo');
    
    const result = await collection.deleteOne(data);

    return result;
}

module.exports = deleteOne;
