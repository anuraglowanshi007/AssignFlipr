import express from 'express';
import { addContact, getContacts } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/add', addContact); // For public contact form submission
router.get('/', getContacts);    // For admin to view all contacts

export default router; 