const express =  require('express');

const user = require('./router/user');

const cors =  require('cors');

const auth = require('./router/auth');

const schedule = require('./router/schedule');

const app = express();

app.use(cors())

app.use(express.json());

app.use('/api/user', user);

app.use('/api/schedule',auth, schedule);

app.listen(3000, () => {
    console.log('listening in port 3000');
})