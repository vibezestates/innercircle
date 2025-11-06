// src/helpers/otp.js

export const sendOtp = async (phone) => {
  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/send-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone }),
  });

  return await res.json();
};

export const verifyOtp = async (phone, otp) => {
  const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone, otp }),
  });

  return await res.json();
};
