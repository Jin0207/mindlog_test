const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',{
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', () => {
    console.log('mongo db is connected');
});