export default async function handler(req, res) {
  // Step 1a: Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Step 1b: Get data from the form
  const { name, email, message } = req.body;

  // Step 1c: Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Step 1d: Log the data (for testing)
  console.log('📨 New message:', { name, email, message });

  // Step 1e: Send success response
  return res.status(200).json({ message: 'Message received successfully!' });
}