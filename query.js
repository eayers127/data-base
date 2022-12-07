const User = require('./user')

const findAllUsers = async() => {
    const allUsers = await User.find()
}

findAllUsers()

const findUserByName = async (firstName) => {
    const users = await User.find({firstName})

    console.log(users)
}

findUserByName('Ethan')