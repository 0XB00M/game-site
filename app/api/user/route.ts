
// pages/api/submit-form.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { agentusername, key, username, name, password, web, balance, isDp, action, tab } = req.body;
    // Handle the form data here
    res.status(200).json({ message: 'Form submitted successfully', data: { agentusername, key, username, name, password, web, balance, isDp, action, tab } });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
