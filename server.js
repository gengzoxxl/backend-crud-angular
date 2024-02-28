
// fastify.register(require('@fastify/formbody'))
const fastify = require('fastify')()
fastify.register(require('@fastify/mysql'), {
    connectionString: 'mysql://root@localhost/mysql'
})
const usersRoutes = require('./routes/users');

fastify.register(require('@fastify/cors'), {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
    maxAge: 86400,
    preflightContinue: false
})
// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.register(usersRoutes)
// Run the server!
fastify.listen({ port: 3001 }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})