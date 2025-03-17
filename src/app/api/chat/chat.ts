import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "Message is required" });
  }

  // Simulasi respons dari AI chatbot
  const aiResponse = `AI Response: Kamu berkata "${message}"`;

  res.status(200).json({ response: aiResponse });
}
