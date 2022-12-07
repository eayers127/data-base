const User = require('./user')

const newUser = new User({
    firstName: 'Ethan',
    middleName: 'Fredrick',
    lastName: 'Ayers',
    age: 22,
    email: 'ethanayers88@gmail.com'
})

newUser.save().then(doc => {
    console.log('New user saved to data base')
    console.log(doc)
})