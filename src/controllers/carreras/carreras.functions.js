'use strict';

import mysql from 'mysql'
import configSql from '../../config/configSql.js';

function getCarreras(){
    
    
    return new Promise((resolve, reject) => {
        try {
            
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'carreras';
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

function addCarrera(body){
    return new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'carreras';
                    const query = `INSERT INTO ${table}(nombreCarrera) values('${body.nombreCarrera}');`;
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

function updateCarrera(params, body){
    return new Promise( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( (err) => {
                if(err){
                    reject(err);
                }else{
                    const table = 'carreras';
                    const query = `update ${table} set nombreCarrera = '${body.nombreCarrera}' where idCarrera = ${params.id}`;
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

function deleteCarrera(params){
    return new Promise ( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( err => {
                if(err)reject(err);
                else{
                    const table = 'carreras';
                    const query = `update ${table} set estado = 0 where idCarrera = ${params.id}`;
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

export default { getCarreras, addCarrera, updateCarrera, deleteCarrera }