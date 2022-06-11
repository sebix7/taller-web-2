
var cors = require('cors')
const express = require('express');
const Lista = require('./ListaDePeliculas');
const app = express();


app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {

   res.json(
     Lista.Peliculas
   )
});

app.get('/:id', (req, res) => {
  let id = parseInt(req.params.id);
  res.json(
    Lista.obtenerPorID(id)
  )
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
