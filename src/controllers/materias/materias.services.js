'use strict';

import express from 'express';
const router = express.Router();

import materiasFunctions from './materias.functions.js'

router.get('/', (req, res) => {
    
    materiasFunctions.getMaterias()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});

router.post('/', (req, res) => {
    materiasFunctions.addMateria(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});

router.put('/:id', (req, res ) => {
    materiasFunctions.updateMateria(req.params,req.body)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})

router.delete('/:id', (req, res ) => {
    materiasFunctions.deleteCarrera(req.params)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})
export default router;