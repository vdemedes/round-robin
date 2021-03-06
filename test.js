'use strict';

/**
 * Dependencies
 */

const roundrobin = require('./');

require('chai').should();


/**
 * Tests
 */

describe ('round-robin', function () {
  
  it ('return next item', function () {
    let servers = [
      'server-1',
      'server-2',
      'server-3'
    ];
    
    let next = roundrobin(servers);
    
    next().should.equal('server-1');
    next().should.equal('server-2');
    next().should.equal('server-3');
    next().should.equal('server-1');
  });
  
});
