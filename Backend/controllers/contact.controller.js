import { Contact } from '../models/contact.model.js';

// Add contact form entry
export const addContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    if (!fullName || !email || !mobile || !city) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit contact form.' });
  }
};

// Get all contact form entries
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch contact forms.' });
  }
}; 