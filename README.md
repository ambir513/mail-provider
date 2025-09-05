# 📧 Mail Provider

A lightweight **TypeScript email provider wrapper** built on top of [Nodemailer](https://nodemailer.com/).
Easily send emails with minimal setup, leveraging free SMTP options and scalable usage — all while keeping your project clean and professional.

---

## 🚀 Installation

```bash
npm install mail-provider
```

```bash
 const response = await emailProvider({
    displayName: "no-reply",
    email: "amarbiradar147@gmail.com",
    subject: "Welcome to Mail Provider 🚀",
    htmlContent: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #4CAF50;">Hello 👋</h2>
        <p>Thanks for trying out <b>Mail Provider</b>.</p>
        <p>This is a test email sent via our package.</p>
      </div>
    `,
  });
```

### With Attachments - (PDF/PNG/JPEG/any..)

```bash
 const response = await emailProvider({
    displayName: "no-reply",
    email: "amarbiradar147@gmail.com",
    subject: "Welcome to Mail Provider 🚀",
    htmlContent: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #4CAF50;">Hello 👋</h2>
        <p>Thanks for trying out <b>Mail Provider</b>.</p>
        <p>This is a test email sent via our package.</p>
      </div>
    `,
    attachments: [ // attachement file
    {
      filename: "sample.pdf",
      path: "./src/assets/sample.pdf", // path to your PDF with same ./src/assets/<yourfile.pdf>
    },
    {
      filename: "vblogo.png",
      path: "./src/assets/vblogo.png", // <-- path to your image with same ./src/assets/<yourlogo.png>
      cid: "logo",                     // allows embedding inline
    },
  ],
  });
```

## 🤝Contributing

Contributions, issues, and feature requests are welcome!
[@ambir513](https://github.com/ambir513)
