'use strict';
import express from 'express'
const router = express.Router();

// Servicio de prueba para comprobar el funcionamiento del servidor.
router.get('/', (req, res) => {
    res.status(200).send('Welcome to Profesorado');
});

export default router;