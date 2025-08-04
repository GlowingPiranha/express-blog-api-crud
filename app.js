// ! importo express
const express = require('express');

// ! definisco app
const app = express();

// ! definisco il port
const port = 3000;

// * importo posts router
const postRouter = require('./routers/posts');

// ! inserisco il middleware
app.use(express.static('public'));

// * router
app.use('/posts', postRouter);

// ! definisco la route base
app.get('/', (req, res) => {
  res.send('Server del mio blog');
})

// ! dico al server di rimanere in ascolto sulla porta indicata sopra
app.listen(port, () => {
  console.log(`Server della bacheca in ascolto su ${port}`);
})