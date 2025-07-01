import { Project } from '../models/project.model.js';
import { uploadOnCloudinary } from '../utiles/cloudinary.js';

// Create a new project
export const addProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log("fdaf",req.body);
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required.' });
    }
    let imageUrl = null;
    if (req.file && req.file.path) {
      const uploaded = await uploadOnCloudinary(req.file.path);
      imageUrl = uploaded?.url || null;
    }
    if (!imageUrl) {
      return res.status(400).json({ error: 'Image upload failed or image is required.' });
    }
    const project = new Project({ name, description, imageUrl });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add project', details: err.message });
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update a project
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updateData = { name, description };
    if (req.file && req.file.path) {
      const uploaded = await uploadOnCloudinary(req.file.path);
      updateData.imageUrl = uploaded?.url || null;
      if (!updateData.imageUrl) {
        return res.status(400).json({ error: 'Image upload failed.' });
      }
    }
    const project = await Project.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update project', details: err.message });
  }
};

// Delete a project
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete project', details: err.message });
  }
}; 
