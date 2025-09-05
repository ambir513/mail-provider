import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "otp.providers@gmail.com",
    pass: "yixbcegiilpsbgrh", // app password
  },
  pool: true, // ✅ keep the connection alive
  maxConnections: 5, // up to 5 parallel connections
  maxMessages: 100, // reuse each connection for 100 emails
  rateDelta: 1000, // time window (1s)
  rateLimit: 5, // max 5 emails per second
});
