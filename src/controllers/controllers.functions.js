'use strict';

import request from 'request';

export default {

    // Función encargada de dar el formato adecuado al string solicitado.

    stringFormat: function (string) {
        string = string.trim();
        const newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
        return newString;
    },

    


    callService: function (url, type, body = null, token = null) {
        return new Promise((resolve, reject) => {
            const options = {
                url: url,
                method: type
            };
            if (body !== null) {
                options.json = body;
            }
            if (token !== null) {
                options.headers = { 'token': token.toString() };
            }
            request(options, function (err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    if (resp.statusCode !== 200) {
                        // reject(err);
                        console.log(body);
                        reject(body);
                    } else {
                        resolve(body);
                    }
                }
            });
        });
    },

    monthRank(myDate = new Date()) {
        let response = { sinceDate: new Date(), untilDate: new Date() };
        let sinceDate = new Date(myDate.getFullYear(), myDate.getMonth(), 1);
        let untilDate = new Date(myDate.getFullYear(), myDate.getMonth() + 1, 0, 23, 59, 59);
        response = { sinceDate: this.getDateTime(sinceDate), untilDate: this.getDateTime(untilDate) };
        return response;
    },

    getDateTime(myDate = new Date()) {
        let dateFormat = myDate.toISOString().split('T')[0];
        let time = myDate.toTimeString().split(' ')[0].substr(0, 5);
        dateFormat = dateFormat + ' ' + time;
        console.log(dateFormat);
        return dateFormat
        // return myDate.toISOString().replace('T', ' ').replace('Z', '').slice(0, -1);
    },

    

};