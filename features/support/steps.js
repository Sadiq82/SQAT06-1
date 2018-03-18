const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";

Given('I go to Figure2 registration page',function(callback) {
  this.browser
  .init()
  .url('https://app.figure1.com/account/register').then(function()
  {callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I enter create to account', function(callback){
  this.browser
  .waitForVisible('.register-page__username-input')
  .setValue('.register-page__username-input', this.randomUsers())
  .setValue('.register-page__email-input',this.randomUsers()+'sadiqbaba@yahoo.com')
  .setValue('.register-page__password-input','sadiq1')
  .setValue('.register-page__confirm-password-input','sadiq1')
  .addValue('.register-page__specialties-list','Doctor')
  .waitForVisible('.register-page__specialties-other-list')
  .addValue('.register-page__specialties-other-list','Doctor Resident')
  .click('.box')
  .click('.register-page__submit-button')
    .then(function(){
    callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see the result for sign up', function(callback) {
  this.browser
  .waitForVisible('.home-feed__share-case', 5000)
  .getText('.home-feed__share-case').then(function(result){
    result.should.equal("Have an interesting case to share?");
    callback();
}).catch(function(error){
callback(error);
})
})

Given('I go to Figure1 registration page',function(callback) {
  this.browser
  .init()
  .url('https://app.figure1.com/account/register').then(function()
  {callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I enter create account', function(callback){
  this.browser
  .waitForVisible('.register-page__username-input')
  .setValue('.register-page__username-input','sadiq')
  .setValue('.register-page__email-input','sadiqbibaba@yahoo.com')
  .setValue('.register-page__password-input','sadiq1')
  .setValue('.register-page__confirm-password-input','sadiq1')
  .addValue('.register-page__specialties-list','Doctor')
  .waitForVisible('.register-page__specialties-other-list')
  .addValue('.register-page__specialties-other-list','Doctor Resident')
  .click('.box')
  .click('.register-page__submit-button')
    .then(function(){
    callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see the result for sign up error', function(callback) {
  this.browser
  .waitForVisible('.error-message-light')
  .getText('.error-message-light').then(function(result){
    result.should.equal("An account with that username already exists.");
    callback();
}).catch(function(error){
callback(error);
})
})
