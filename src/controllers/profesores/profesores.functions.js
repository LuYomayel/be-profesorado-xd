'use strict';

import mysql from 'mysql'
import configSql from '../../config/configSql.js';

function getProfesores(){
    
    
    return new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'profesores';
                    const query = `SELECT * FROM ${table} where estado = 1;`;
                    connection.query(query, (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            connection.end(() => {
                                resolve(results);
                            });
                        }
                    });
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}

function addProfesor(body){
    return new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'profesores';
                    const query = `INSERT INTO ${table}(dniProfesor,nombreProfesor,apellidoProfesor,fechaNacProfesor,direccionProfesor,emailProfesor) values(${body.dniProfesor}, '${body.nombreProfesor}', '${body.apellidoProfesor}', '${body.fechaNacProfesor}','${body.direccionProfesor}','${body.emailProfesor}') ;`;
                    connection.query(query, (err, results) => {
                        if (err) {
                            reject(err);
                        } else {
                            connection.end(() => {
                                resolve(results);
                            });
                        }
                    });
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}

function updateProfesor(params, body){
    return new Promise( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( (err) => {
                if(err){
                    reject(err);
                }else{
                    const table = 'profesores';
                    const query = `update ${table} set nombreProfesor = '${body.nombreProfesor}', apellidoProfesor='${body.apellidoProfesor}', fechaNacProfesor='${fechaNacProfesor}', direccionProfesor='${body.direccionProfesor}', emailProfesor = '${body.emailProfesor}' where idProfesor = ${params.id}`;
                    connection.query(query, (err,result)=>{
                        if(err)reject(err);
                        else{
                            connection.end( () =>{
                                resolve(result)
                            })
                        }
                    })
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

function deleteProfesor(params){
    return new Promise ( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( err => {
                if(err)reject(err);
                else{
                    const table = 'profesores';
                    const query = `update ${table} set estado = 0 where idProfesor = ${params.id}`;
                    connection.query( query, (err,result) => {
                        if(err)reject(err);
                        else{
                            connection.end( () => {
                                resolve(result)
                            })
                        }
                    })
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

export default { getProfesores, addProfesor, updateProfesor, deleteProfesor }
