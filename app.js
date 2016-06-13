var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    compression = require('compression');

app.use(compression());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/pizza', (req, res) => {
  res.render('pizza');
});

app.get('/2048', (req, res) => {
  res.render('2048');
});

app.get('/webperf', (req, res) =>{
  res.render('webperf');
});

app.get('/mobile', (req, res) =>{
  res.render('mobile');
});

app.get('*', (req, res) =>{
  res.render('index');
});

app.listen(port, ()=>{
  console.log(`app running on port ${port}`);
});
