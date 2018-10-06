const express = require('express');
const app = express();
const cors = require('cors');
const sass = require('node-sass');

const log = msg => console.log(msg);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/view', express.static(process.cwd() + '/view'));

app.get('/', (req,res) => {

});






app.listen(port, () => console.log(`server started on port ${port}`));
