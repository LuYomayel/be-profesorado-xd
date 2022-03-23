'use strict';

import express from 'express';
const router = express.Router();

import carrerasFunctions from './carreras.functions.js'

router.get('/', (req, res) => {
    
    carrerasFunctions.getCarreras()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});

router.post('/', (req, res) => {
    carrerasFunctions.addCarrera(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});

router.put('/:id', (req, res ) => {
    carrerasFunctions.updateCarrera(req.params,req.body)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})

router.delete('/:id', (req, res ) => {
    carrerasFunctions.deleteCarrera(req.params)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})
export default router;