const express = require('express')
const AuthService = require('./auth-service')

const authRouter = express.Router()
const jsonBodyParser = express.json()


authRouter
    .post('/login', jsonBodyParser, (req, res, next) => {
        const { userId, fullName } = req.body;
        const user = { user_id: userId, full_name: fullName }


        AuthService.getUserWithId(
            req.app.get('db'),
            userId
        )
            .then(dbUser => {
                if (!dbUser) {
                    return AuthService.createUser(req.app.get('db'), user)
                        .then(user => {
                            const sub = user.full_name
                            const payload = {user_id: user.user_id}
                            const jwt = AuthService.createJwt(sub, payload)
                            res.send({authToken: jwt})
                        })
                }
                const sub = dbUser.full_name
                const payload = { user_id: dbUser.user_id}
                const jwt = AuthService.createJwt(sub, payload)
                res.send({authToken: jwt})
            })
            .catch(next)
    })

    module.exports = authRouter