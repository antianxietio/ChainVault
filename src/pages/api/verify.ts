import { NextApiRequest, NextApiResponse } from "next";
import { verifyMessage } from "viem";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  const { address, message, signature } = req.body;

  try {
    const isValid = await verifyMessage({ address, message, signature });

    if (isValid) {
      // Store session/token logic here later
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ success: false, error: "Invalid signature" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
