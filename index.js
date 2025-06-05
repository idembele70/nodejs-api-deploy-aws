const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur la mini API Node.js 🚀');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello depuis l’API !' });
});

app.post('/api/echo', (req, res) => {
  res.json({ you_sent: req.body });
});

app.listen(PORT, () => {
  console.log(`✅ Mini API démarrée sur http://localhost:${PORT}`);
});
