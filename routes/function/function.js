// Load libraries
const express = require('express');
const mongoose = require('mongoose');
const randomstring = require('randomstring')

// Load user model
const db = require('../../model/url.js');

// Load function
const urlValidationCheck = require('./url-check.js')

// const route = express();

console.log(urlValidationCheck('http://'))