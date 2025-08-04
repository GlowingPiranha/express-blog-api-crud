// * index
const index = (req, res) => {
  res.json(posts);
}

// * show
const show = (req, res) => {
  res.send(`Dettaglio del post con id: ${req.params.id}`);
}

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