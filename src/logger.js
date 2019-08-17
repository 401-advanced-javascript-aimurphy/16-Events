'use strict';
/**
 * API Server Module
 * @module ./logger
 */

const events = require('./src/event.js/index.js');


events.on('err', payload=>doLog('err', payload));
events.on('write', payload=>doLog('create', payload));
/**
 * Handles events
 * @function doLog
 */
function doLog(action, payload){
  console.log(action.toUpperCase(),payload);
}