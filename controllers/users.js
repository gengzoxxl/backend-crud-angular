const { query } = require('../config/db');
const moment = require('moment');


const getUsers = async (req, res) => {
    try {
        const sql = 'SELECT * FROM users';
        const rows = await query(sql);
        console.log('hi im jame')
        console.log('hi im fah3')
        console.log('hi im fah4')
        console.log('hi im fah5')
        console.log('hi im jame6')
        console.log('hi im fah6')
        console.log('hi im fah-new test')
        console.log('hi im keng-new test')
        return res.status(200).send(rows);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}


module.exports = {
    getUsers
}