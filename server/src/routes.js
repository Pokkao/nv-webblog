const UserController = require('./controllers/UserController')

module.exports = (app) => {
    /*RESFUL Api for users management*/
    // create user
    app.post('/user',
        UserController.create
    )

    //edit User, suspend, active
    app.put('/user/:userId',
        UserController.put
    )

    // delete user
    app.delete('/user/:userId',
        UserController.remove
    )

    // get user by Id
    app.get('/user/:userId',
        UserController.show
    )

    // get all user
    app.get('/users',
        UserController.index
    )
}