const path = require('path');
const express = require('express');
const xss = require('xss');
const LeadgenService = require('./leadgen-service');

const LeadGenRouter = express.Router();
const jsonParser = express.json();

LeadGenRouter 
    .router('/')
    .get