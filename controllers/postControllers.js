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
  res.send(`Creazione di un nuovo post`);
}

// * update
const update = (req, res) => {
  res.send(`Modifica totale del post con id: ${req.params.id}`);
}

// * delete
const destroy = (req, res) => {
  res.send(`Cancellazione del post con id: ${req.params.id}`);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};