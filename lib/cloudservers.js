/*
 * cloudservers.js: Wrapper for node-cloudservers object
 *
 * (C) 2010 Nodejitsu Inc.
 * MIT LICENSE
 *
 */

require.paths.unshift(__dirname); 

var cloudservers = exports;

// Version 
cloudservers.version = [0, 2, 0];

cloudservers.createClient  = require('cloudservers/core').createClient;
cloudservers.Client        = require('cloudservers/core').clients;

// Type Definitions
cloudservers.Server        = require('cloudservers/cloud-server').Server;
cloudservers.Flavor        = require('cloudservers/flavor').Flavor;
cloudservers.Image         = require('cloudservers/image').Image;