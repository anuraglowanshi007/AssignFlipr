import Newsletter from '../models/newsletter.model.js';

// Subscribe to newsletter
export const subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const existing = await Newsletter.findOne({ email });
        if (existing) {
            return res.status(400).json({ error: 'Email already subscribed' });
        }

        const subscriber = new Newsletter({ email });
        await subscriber.save();
        res.status(201).json(subscriber);
    } catch (err) {
        console.error(err);
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Email already subscribed' });
        }
        if (err.errors && err.errors.email) {
            return res.status(400).json({ error: err.errors.email.message });
        }
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all subscribers (Admin)
export const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
        res.json(subscribers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Unsubscribe (Admin)
export const unsubscribe = async (req, res) => {
    try {
        const { id } = req.params;
        const subscriber = await Newsletter.findByIdAndDelete(id);

        if (!subscriber) {
            return res.status(404).json({ error: 'Subscriber not found' });
        }

        res.json({ message: 'Unsubscribed successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to unsubscribe' });
    }
}; 