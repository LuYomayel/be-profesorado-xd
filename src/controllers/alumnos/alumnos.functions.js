'use strict';

import mysql from 'mysql'
import configSql from '../../config/configSql.js';

function getAlumnos(){
    
    
    return new Promise((resolve, reject) => {
        try {
            
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'alumnos';
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

function addAlumno(body){
    return new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect((err) => {
                if (err) {
                    reject(err);
                } else {
                    const table = 'alumnos';
                    const query = `INSERT INTO ${table}(dniAlumno,nombreAlumno,apellidoAlumno,fechaNacAlumno,direccionAlumno,emailAlumno) values(${body.dniAlumno}, '${body.nombreAlumno}', '${body.apellidoAlumno}', '${body.fechaNacAlumno}','${body.direccionAlumno}','${body.emailAlumno}') ;`;
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

function updateAlumno(params, body){
    return new Promise( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( (err) => {
                if(err){
                    reject(err);
                }else{
                    const table = 'alumnos';
                    const query = `update ${table} set nombreAlumno = '${body.nombreAlumno}', apellidoAlumno='${body.apellidoAlumno}', fechaNacAlumno='${fechaNacAlumno}', direccionAlumno='${body.direccionAlumno}', emailAlumno = '${body.emailAlumno}' where idAlumno = ${params.id}`;
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

function deleteAlumno(params){
    return new Promise ( (resolve, reject) => {
        try {
            const connection = mysql.createConnection(configSql);
            connection.connect( err => {
                if(err)reject(err);
                else{
                    const table = 'alumnos';
                    const query = `update ${table} set estado = 0 where idAlumno = ${params.id}`;
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

export default { getAlumnos, addAlumno, updateAlumno, deleteAlumno }