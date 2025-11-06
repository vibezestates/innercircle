// server/otphandler.js
import express from "express";
import fetch from "node-fetch";  // only for Node <18. Node 18+ has fetch built-in.
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // loads .env

const app = express();

app.use(express.json());
app.use(cors());

// ✅ POST /send-otp
app.post("/send-otp", async (req, res) => {
  const { phone } = req.body;

  try {
    const API_KEY = process.env.VITE_SMS_ALERT_API_KEY;
    const SENDER_ID = process.env.VITE_SMS_SENDER_ID;

    const url = `https://www.smsalert.co.in/api/mverify.json?apikey=${API_KEY}&sender=${SENDER_ID}&mobileno=${phone}&template=Your%20verification%20code%20for%20mobile%20verification%20is%20[otp%20length=%224%22]%20Powered%20by%20Vibez%20Estates`;

    const response = await fetch(url);
    const result = await response.json();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ POST /verify-otp
app.post("/verify-otp", async (req, res) => {
  const { phone, otp } = req.body;

  try {
    const API_KEY = process.env.VITE_SMS_ALERT_API_KEY;
    const url = `https://www.smsalert.co.in/api/mverify.json?apikey=${API_KEY}&mobileno=${phone}&code=${otp}`;

    const response = await fetch(url);
    const result = await response.json();

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`OTP server running on port ${PORT}`));
