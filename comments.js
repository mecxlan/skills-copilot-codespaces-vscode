// Create web server
// ==================================

// Import module
const express = require('express'); 
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController_create_get);
router.post('/create', commentController_create_post);
router.get('/:id/delete', commentController_delete_get);