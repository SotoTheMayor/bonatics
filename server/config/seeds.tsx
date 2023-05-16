const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();
    await User.create({
        firstName: 'Bonatics'
    })
    await User.create({
        firstName: 'Jason'
    })

console.log("**Seeded!!");
const test = User.findOne({ firstName: 'Bonatics'}) 
console.log(test.firstName)

    process.exit();
})