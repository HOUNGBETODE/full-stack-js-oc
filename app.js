const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

mongoose.connect("gAAAAABmQe3LbaDkHFbJSPFzzy96BvAZtImKtq4jOUOIzDD7z0NPmmWom3fHQIv1RXTf3okfsKVP_sYD4QAjmZ_AhoHDbjmTHnxqNsH_yxcGvBa7il9TlDpV9FBn4oB7nke-aYQEFLN7JH7WDBtu4V9hZteXd2r6yhk_xah9ANxZTe2nNRqMGNXKkL9fhxrz2II4uQT0XqyLSkzSpG3SpVI80S-4UlPFcw==",
                    { useNewUrlParser: true,
                        useUnifiedTopology: true })
                    .then(() => console.log('Connexion à MongoDB réussie !'))
                    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json()); //intercepte toutes les requêtes contenant du JSON et nous met à disposition ce contenu dans le corps de la requête (req.body)
                         //la librairie body-parser fait également la même chose

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //autoriser l'accès à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //les headers que doivent contenir les requêtes envoyées à notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS'); //les requêtes doivent être envoyées avec les méthodes HTTP mentionnées ici
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images'))); //servir des pages statiques

module.exports = app;
