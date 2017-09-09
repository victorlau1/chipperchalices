'use strict';
const request = require('supertest');
const express = require('express');
const expect = require('chai').expect;
const app = require('../app.js');
const models = require('../../db/models');

describe('basic server', function() {
  it('sends back hello world', function(done) {
    request(app)
      .get('/api')
      .expect(200)
      .expect(function(res) {
        expect(res.text).to.equal('Hello World!');
      })
      .end(done);
  });

  it('accepts POST request', function(done) {
    request(app)
      .post('/api')
      .expect(201)
      .expect(function(res) {
        expect(res.body.data).to.equal('Posted!');
      })
      .end(done);
  });
});

// describe('/card', function(){
//   it('accepts POST requests', function(done){

//   });

//   it('sends client information to the database', function(){

//   });
  
// });