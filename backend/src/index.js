const express = require('express');
const app = express();
const port = 3001;

app.get('/', (_, res) => {
    res.send('Backend funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
