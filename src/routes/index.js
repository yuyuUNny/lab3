const express = require('express');
const { version, author } = require('../../package.json');
const { createSuccessResponse } = require('../response');

const router = express.Router();

router.get('/', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.status(200).json(createSuccessResponse({
    service: 'fragments',
    uptime: process.uptime(),
    version,
    author,
    githubUrl: 'https://github.com/DC-Seneca/2025F-CCP-Lab3-Demo'
  }));
});

router.get('/health', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.status(200).json(createSuccessResponse({ uptime: process.uptime() }));
});

module.exports = router;
