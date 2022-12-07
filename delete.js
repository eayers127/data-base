const User = require('./user')

const deleteUserByFirstName = async(firstName) => {
    await User.deleteOne({firstName}) // wont run unless it is in the database

    const allUsers = User.find()

    console.log(allUsers)
}

deleteUserByFirstName('Ethan')