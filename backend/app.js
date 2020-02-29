'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas
var project_routes = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));           // Configuracion para bodyParser
app.use(bodyParser.json());                                 // Convertir cualquier peticion que llegue se va transformar en json

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');         // Aqui iria la URL de la Web en vez de *
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// rutas
app.use('/api', project_routes);


// exportar archivo
module.exports = app;