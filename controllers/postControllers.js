// * importo i dati da data.js
const posts = require('../data/dataPosts');

// * index
const index = (req, res) => {
  // recupero il parametro tramite query sting
  const tagParam = req.query.tags;

  // se non c'è parametro, restituisco tutti i post
  if (!tagParam) {
    return res.json(posts);
  }

  const filteredPosts = posts.filter(post => {
    return post.tags && post.tags.some(tag => tag.toLowerCase() === tagParam.toLowerCase());
  });

  res.json(filteredPosts);
}

// * show
const show = (req, res) => {
  console.log('show chiamato con id:', req.params.id);
  // converto da stringa a numero
  const id = parseInt(req.params.id);
  // cerco il post
  const post = posts.find(item => item.id === id);

  // faccio IF
  if (!post) {
    return res.status(404).json({
      error: "404 Not Found",
      message: "Post non trovato"
    })
  }

  // se è apposto restituisce il post
  res.json(post);
};

// * create
const create = (req, res) => {
  console.log(`dati ricevuti nel body`, req.body);

  res.status(200).json({
    message: "post ricevuto correttamente",
    dati: req.body
  })
}

// * update
const update = (req, res) => {
  res.send(`Modifica totale del post con id: ${req.params.id}`);
}

// * delete
const destroy = (req, res) => {

  const id = parseInt(req.params.id);

  const post = posts.find(item => item.id === id);

  if (!post) {
    return res.status(404).json({
      error: "404 Not Found",
      message: "Post non trovato"
    })
  }

  posts.splice(posts.indexOf(post), 1);

  console.log('nuovo array');
  console.log(posts);

  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};