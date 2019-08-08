const UserService = require('../../services/User')

module.exports = {
    config(server){
        server.post('/users', createUser)
        server.get('/users', getUsers)
    }
}

async function createUser(req, res){
    try{
        const newUser = await UserService.create(req.body)
        res.json({result: true, data: newUser})
    }
    catch(error){
        res.json({ result: false })
        console.error(error)
    }
}

async function getUsers(req, res){
    try{
        const credentials = req.headers
        const users = await UserService.get(credentials)
        res.json({ result: true, data: users})
    }
    catch(error){
        res.json({ result: false })
        console.error(error)
    }
}