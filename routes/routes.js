const express = require('express');
const app = express();
const router = express.Router();

const log = msg => console.log(msg);
let users = [];

app.use('/public', express.static(process.cwd() + '/view'));

router.get('/', (req,res) => {
    log(process.cwd());
    res.sendFile(process.cwd() + '/view/index.html');
});

router.get('/api/exercise/users' , (req,res) => {
    res.send(users);
});

router.get('/api/exercise/log/:id', (req,res) => {
    res.end('end');
});

router.post('/api/exercise/new-user', (req,res) => {
    res.end('end');
});

router.post('/api/exercise/add', (req,res) => {
    res.end('end');
});

module.exports = router;


