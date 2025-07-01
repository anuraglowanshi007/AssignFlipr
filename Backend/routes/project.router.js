import express from 'express';
import { getProjects, addProject, updateProject, deleteProject } from '../controllers/project.controller.js';
// import { upload } from '../middleware/multer.middleware.js';
import {upload} from "../middleware/multer.middleware.js"

const router = express.Router();

// Public route
router.get('/', getProjects);

// Protected or admin routes can be added as needed
router.post('/add', upload.single('image'), addProject);
router.put('/:id', upload.single('image'), updateProject);
router.delete('/:id', deleteProject);

export default router; 