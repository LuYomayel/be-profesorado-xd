'use strict';

import express from 'express';
const router = express.Router();

import profesoresFunctions from './profesores.functions.js'

router.get('/', (req, res) => {
    
    profesoresFunctions.getProfesores()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});

router.get('/:id', (req, res) => {
    
  profesoresFunctions.getProfesor(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(err => {
    res.status(500).send(err);
  })

});

router.post('/', (req, res) => {
    profesoresFunctions.addProfesor(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
  
});

router.put('/:id', (req, res ) => {
    profesoresFunctions.updateProfesor(req.params,req.body)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})

router.delete('/:id', (req, res ) => {
    profesoresFunctions.deleteProfesor(req.params)
    .then( response => {
        res.status(200).send(response)
    })
    .catch( error => {
        res.status(500).send(error)
    })
})
export default router;