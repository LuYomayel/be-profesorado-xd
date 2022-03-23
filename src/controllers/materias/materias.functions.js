'use strict';

import mysql from 'mysql'
import configSql from '../../config/configSql.js';

function getMaterias(){
    
    
    return new Promise((resolve, reject) => {
        try {
            
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'materias';
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

function addMateria(body){
    return new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'materias';
                    const query = `INSERT INTO ${table}(nombreMateria) values('${body.nombreMateria}');`;
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

function updateMateria(params, body){
    return new Promise( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( (err) => {
                if(err){
                    reject(err);
                }else{
                    const table = 'materias';
                    const query = `update ${table} set nombreMateria = '${body.nombreMateria}' where idMateria = ${params.id}`;
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

function deleteMateria(params){
    return new Promise ( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( err => {
                if(err)reject(err);
                else{
                    const table = 'materias';
                    const query = `update ${table} set estado = 0 where idMateria = ${params.id}`;
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

export default { getMaterias, addMateria, updateMateria, deleteMateria }