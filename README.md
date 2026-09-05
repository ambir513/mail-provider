# 📧 Mail Provider

A lightweight and developer-friendly email provider built on top of [Nodemailer](https://nodemailer.com/).

**Mail Provider** provides a simple API for sending HTML emails and attachments without requiring you to work directly with Nodemailer's transporter configuration.

The package is preconfigured to use Gmail SMTP, so you do not need to configure your own email account or SMTP credentials. Gmail configuration is already embedded and ready to use.

> Built with TypeScript and designed to work with both **JavaScript and TypeScript**, including **ESM and CommonJS** environments.

---

## ✨ Features

- 📩 Send HTML emails with a simple API
- 📎 Support file attachments
- 🖼️ Support inline images using CID
- 🟦 Full TypeScript support
- 🟨 Works with JavaScript
- 📦 Supports ESM and CommonJS
- 🚀 Lightweight wrapper around Nodemailer
- 🛠️ Simple developer-friendly API
- 📁 Supports relative and absolute attachment paths

---

## 📦 Installation

```bash
npm install mailprovider
```

---

## 🚀 Quick Start

### TypeScript / ESM

```ts
import { emailProvider } from "mailprovider";

const response = await emailProvider({
  displayName: "No Reply",
  email: "recipient@example.com",
  subject: "Welcome to Mail Provider 🚀",
  htmlContent: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #4CAF50;">Hello 👋</h2>
      <p>Thanks for trying out <strong>Mail Provider</strong>.</p>
      <p>This is a test email sent using our package.</p>
    </div>
  `,
});

console.log(response);
```

---

## 🟨 JavaScript

Mail Provider can also be used directly from JavaScript.

### ESM

```js
import { emailProvider } from "mailprovider";

const response = await emailProvider({
  displayName: "No Reply",
  email: "recipient@example.com",
  subject: "Welcome 🚀",
  htmlContent: `
    <h2>Hello 👋</h2>
    <p>Welcome to Mail Provider.</p>
  `,
});

console.log(response);
```

### CommonJS

```js
const { emailProvider } = require("mailprovider");

async function send() {
  const response = await emailProvider({
    displayName: "No Reply",
    email: "recipient@example.com",
    subject: "Welcome 🚀",
    htmlContent: `
      <h2>Hello 👋</h2>
      <p>Welcome to Mail Provider.</p>
    `,
  });

  console.log(response);
}

send();
```

---

# 📎 Attachments

You can attach PDFs, images, documents, or other files using the `attachments` option.

```ts
import { emailProvider } from "mailprovider";

const response = await emailProvider({
  displayName: "No Reply",
  email: "recipient@example.com",
  subject: "Your Documents 📎",
  htmlContent: `
    <div style="font-family: Arial, sans-serif;">
      <h2>Your files are attached 📄</h2>
      <p>Please find the requested documents attached to this email.</p>
    </div>
  `,
  attachments: [
    {
      filename: "sample.pdf",
      path: "./src/assets/sample.pdf",
    },
    {
      filename: "vblogo.png",
      path: "./src/assets/vblogo.png",
    },
  ],
});
```

### Supported Files

You can attach virtually any file type supported by Nodemailer, including:

- 📄 PDF
- 🖼️ PNG
- 🖼️ JPEG / JPG
- 📊 Excel
- 📝 Word documents
- 📦 ZIP
- 📁 Other file types

---

# 🖼️ Inline Images

You can embed images directly inside your HTML email using a **Content-ID (`cid`)**.

### Send the email

```ts
await emailProvider({
  displayName: "No Reply",
  email: "recipient@example.com",
  subject: "Welcome 🎉",
  htmlContent: `
    <div style="font-family: Arial, sans-serif;">
      <h2>Welcome!</h2>

      <img
        src="cid:logo"
        alt="Logo"
        width="200"
      />

      <p>Thanks for joining us.</p>
    </div>
  `,
  attachments: [
    {
      filename: "logo.png",
      path: "./src/assets/logo.png",
      cid: "logo",
    },
  ],
});
```

The important part is:

```html
<img src="cid:logo" />
```

and:

```ts
{
  filename: "logo.png",
  path: "./src/assets/logo.png",
  cid: "logo",
}
```

---

# 📚 API

## `emailProvider(options)`

Sends an email using the configured SMTP transporter.

### Options

| Property      | Type           | Required | Description                  |
| ------------- | -------------- | -------: | ---------------------------- |
| `displayName` | `string`       |       ✅ | Sender display name          |
| `email`       | `string`       |       ✅ | Recipient email address      |
| `subject`     | `string`       |       ✅ | Email subject                |
| `htmlContent` | `string`       |       ✅ | HTML content of the email    |
| `attachments` | `Attachment[]` |       ❌ | Files to attach to the email |

### Attachment

| Property      | Type     | Required | Description                       |
| ------------- | -------- | -------: | --------------------------------- |
| `filename`    | `string` |       ✅ | Name shown to the recipient       |
| `path`        | `string` |       ✅ | Absolute or relative file path    |
| `cid`         | `string` |       ❌ | Content-ID used for inline images |
| `contentType` | `string` |       ❌ | Optional MIME type                |

---

# 📁 Attachment Paths

Both relative and absolute paths are supported.

### Relative path

```ts
{
  filename: "invoice.pdf",
  path: "./src/assets/invoice.pdf",
}
```

### Absolute path

```ts
{
  filename: "invoice.pdf",
  path: "C:/Users/username/Documents/invoice.pdf",
}
```

Relative paths are resolved from the application's current working directory.

---

# 📦 Module Support

Mail Provider supports both modern and legacy Node.js module systems.

### ESM

```ts
import { emailProvider } from "mailprovider";
```

### CommonJS

```js
const { emailProvider } = require("mailprovider");
```

It also provides TypeScript declaration files for editor autocomplete and type checking.

---

# 🛡️ Error Handling

`emailProvider()` throws an error when the email cannot be sent.

You can handle errors using `try/catch`:

```ts
try {
  const response = await emailProvider({
    displayName: "No Reply",
    email: "recipient@example.com",
    subject: "Test Email",
    htmlContent: "<h1>Hello!</h1>",
  });

  console.log("Email sent:", response.messageId);
} catch (error) {
  console.error("Failed to send email:", error);
}
```

---

# 🔗 Built With

- [TypeScript](https://www.typescriptlang.org/)
- [Nodemailer](https://nodemailer.com/)
- Node.js

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

GitHub:

[@ambir513](https://github.com/ambir513)

---

# 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you find **Mail Provider** useful, consider giving the project a ⭐ on GitHub.

Made with ❤️ for developers.
