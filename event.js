'use strict';
/**
 * API Server Module
 * @module ./event
 */

/**
 * Require Events module from npm and create a singleton which we will export and manipulate
 * @exports events
 */
const Events = require('events');

const events = new Events();

module.exports=events;