const assert = require('assert');
const { isTypedArray } = require('util/types');
const insert = require('../db/insert');
const find = require('../db/find');

describe('MongoDB Test', () => {
    it('#insert', async () => {
        const res = await insert({test: 'something else'});
        assert(res);
    });

    it('#find ALL', async () => {
        const res = await find();
        assert(res);
    })

    it('#find Specific', async () => {
        const res = await find({test: 'something else'});
        assert(res);
    })
})