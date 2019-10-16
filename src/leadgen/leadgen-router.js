const path = require('path');
const express = require('express');
const xss = require('xss');
const LeadgenService = require('./leadgen-service');
const { requireAuth } = require('../middleware/auth');

const leadGenRouter = express.Router();
const jsonParser = express.json();

leadGenRouter 
    .route('/')
    .get(requireAuth, (req, res, next) => {
        const knexInstance = req.app.get('db');
        LeadgenService.getAllLeads(knexInstance, req.user.id)
            .then(leads => {
                res.json(leads)
            })
            .catch(next);
    })
    .post(requireAuth, jsonParser, (req, res, next) => {
        const owner = req.user.id;
        console.log
        // const { post_title, post_content } = req.body
        // const post = { post_title, post_content, owner } 


        for (const [key, value] of Object.entries(post))
            if (value == null)
                return res.status(400).json({
                    error: { message: `Missing '${key}' in body request`}
                });

     
    })
 
module.exports = leadGenRouter;