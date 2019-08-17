'use strict';

/**
 * API Server Module
 * @module ./app
 */

const fs = require('fs');
const events = require('./event.js/index.js');
const logger = require('./logger.js/index.js');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { events.emit('err', err); }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { events.emit('err', err);}
      events.emit('write', `${file} saved`);
      // console.log(`${file} saved`);
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);
