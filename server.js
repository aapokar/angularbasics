const express = require('express')
const app = express()

app.use(express.static('./dist/angularbasics'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: 'dist/angularbasics/'
  });
});

app.listen(process.env.PORT || 8080);