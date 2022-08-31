const express = require("express");
const app = express();

app.use(express.json());

app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

app.get("/", (_, response) => {
  response.render('index', {
    title: '',
    sectionHeading: 'Full Cycle Rocks!',
    peopleList: ['name 1', 'name 2']
  })
});

app.listen(3000, () => {
  console.log('> [server] server listening in port 3000');
});
