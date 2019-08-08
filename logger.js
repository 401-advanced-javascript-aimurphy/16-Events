'use strict';
/**
 * API Server Module
 * @module ./logger
 */

const events = require('./event.js');


events.on('err', payload=>doLog('err', payload));
events.on('write', payload=>doLog('create', payload));
/**
 * Handles events
 * @function doLog
 */
function doLog(action, payload){
  console.log(action.toUpperCase(),payload);
}