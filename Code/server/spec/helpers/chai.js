var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var request = require('supertest');

chai.config.includeStack = true;

chai.use(sinonChai);

chai.config.includeStack = true;

global.chai = chai;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;
global.sinon = sinon;
global.request = request;