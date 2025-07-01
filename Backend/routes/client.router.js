import express from 'express';
import {
  getClients,
  addClient,
  deleteClient
} from '../controllers/client.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import { Client } from '../models/client.model.js';

const router = express.Router();

// Public route
router.get('/', getClients);

// Protected routes
// router.use(protect);
router.post('/addClients', upload.single('image'), addClient);
router.delete('/:id', deleteClient);

export default router;