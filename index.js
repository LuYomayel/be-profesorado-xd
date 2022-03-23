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

app.use('/', controllers)
app.use('/profesores', profesores)
app.use('/alumnos', alumnos)
app.use('/carreras', carreras)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Profesorado listening to ... ' + port)
})