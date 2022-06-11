
var cors = require('cors')
const express = require('express');
const Lista = require('./ListaDeFunciones');
const app = express();


app.use(express.json());
app.use(cors())

app.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.json(
    Lista.obtenerPorID(id)
  )
});

app.listen(3002, () => {
    console.log('Example app listening on port 3002!')
});
