import express from 'express';
import { subscribe, getSubscribers, unsubscribe } from '../controllers/newsletter.controller.js';

const router = express.Router();

router.post('/subscribe', subscribe);
router.get('/subscribers', getSubscribers);
router.delete('/unsubscribe/:id', unsubscribe);

export default router; 