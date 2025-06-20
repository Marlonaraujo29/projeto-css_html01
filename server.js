const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta src/public
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Rota principal para servir o HTML da pasta src/view
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'view', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});


