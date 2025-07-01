import {Client} from "../models/client.model.js"
import { uploadOnCloudinary } from "../utiles/cloudinary.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const addClient = async (req, res) => {
  try {
    const { name, designation, description } = req.body;
    let imageUrl = null;

    if (req.file && req.file.path) {
      const uploadedImage = await uploadOnCloudinary(req.file.path);
      imageUrl = uploadedImage?.url || null;
    }

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image upload failed or image is required.' });
    }

    const client = new Client({ name, designation, description, imageUrl });
    await client.save();

    res.status(201).json(client);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add client', details: err.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id);

    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json({ message: 'Client deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete client' });
  }
};