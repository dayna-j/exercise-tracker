const express = require('express');
const app = express();
const cors = require('cors');
// const sass = require('node-sass');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const log = msg => console.log(msg);
// const routes = require('./routes/routes.js');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/routes.js'))
// app.use('/public', express.static(process.cwd() + '/view'));

// log(routes);

// app.get('/', (req,res) => {
//     res.sendFile(process.cwd() + '/view/index.html');
// });

app.listen(port, () => console.log(`server started on port ${port}`));
