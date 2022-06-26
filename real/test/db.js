const assert = require('assert');
const { isTypedArray } = require('util/types');
const insert = require('../db/insert');
const insertMany = require('../db/insertMany');
const find = require('../db/find');
const update = require('../db/update');
const deleteOne = require('../db/delete');

describe('MongoDB Test', () => {
    it('#insert', async () => {
        const res = await insert({test: 'something else'});
        assert(res);
    });

    it('#insertMany', async() => {
        const res = await insertMany([
            {test: 'this is a new test'}
            , {anotherTest: 'this is another test'}
        ])
        assert(res)
    });

    it('#find ALL', async () => {
        const res = await find();
        assert(res);
    })

    it('#find Specific', async () => {
        const res = await find({test: 'something else'});
        assert(res);
    })

    it('#update', async () => {
        const res = await update({test: 'something else'}, {test: 'new data'});
        assert(res);
    })

    it('#deleteOne', async () => {
        const res = await deleteOne({test: 'new data'});
        //정상적으로 작동이되었는지 확인하는 함수 assert
        assert(res);
    })
})