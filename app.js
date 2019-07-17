const express = require('express');
var path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));
//app.use('/script/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/angular', express.static(path.join(__dirname , '/node_modules/angular')));
app.use('/api-designer', express.static(path.join(__dirname + '/node_modules/api-designer/dist')));

app.get('/test', function (req, resp) {
    resp.send('It is working')
});


var server = app.listen(port, () => {
    console.log("Server started on " + port);
});