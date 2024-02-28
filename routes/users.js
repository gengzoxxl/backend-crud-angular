const users = require('../controllers/users');


async function usersRoutes(fastify, options, next) {
    fastify.get('/users', users.getUsers);

}


module.exports = usersRoutes;