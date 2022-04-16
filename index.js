import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.text({extended: true}))

// Routes
import controllers from './src/controllers/controllers.services.js'
import profesores from './src/controllers/profesores/profesores.services.js'
import alumnos from './src/controllers/alumnos/alumnos.services.js'
import carreras from './src/controllers/carreras/carreras.services.js';
import materias from './src/controllers/materias/materias.services.js';

app.use('/api', controllers)
app.use('/api/profesores', profesores)
app.use('/api/alumnos', alumnos)
app.use('/api/carreras', carreras)
app.use('/api/materias', materias);


const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Profesorado listening to ... ' + port)
})