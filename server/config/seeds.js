const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();
    await User.create({
        firstName: 'Bonatics'
    })
    await User.create({
        firstName: 'OtherName'
    })

    process.exit();
})