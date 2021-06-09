const db = require('./models')

db.user.create({
    username: 'fakeUser',
    pw: 'fakePW',
    zipcode: '98101'
}).then(res => console.log(res))