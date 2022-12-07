const User = require('./user')

const incrementAge = async(firstName) => {
    const user = await User.findOne({firstName})

    if(!user){
        throw new Error('User not found')
    }

    user.age++

    const result = await user.save()

    
}

incrementAge('Ethan')