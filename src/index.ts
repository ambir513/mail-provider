import { transporter } from "./utils/mailer.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export interface Attachment {
  filename: string;
  path: string;
  cid?: string; // For embedding images in HTML
  contentType?: string; // Optional: specify MIME type
}

export interface EmailProviderFields {
  displayName: string;
  email: string;
  subject: string;
  htmlContent: string;
  attachments?: Attachment[];
}

export async function emailProvider({
  displayName,
  email,
  subject,
  htmlContent,
  attachments = [],
}: EmailProviderFields) {
  try {
    // inside emailProvider
    const resolvedAttachments = attachments.map((att) => ({
      ...att,
      path: path.isAbsolute(att.path)
        ? att.path
        : path.resolve(process.cwd(), att.path), // ✅ relative to project root
    }));

    const info = await transporter.sendMail({
      from: `"${displayName}" <otp.providers@gmail.com>`, // Better formatting
      to: email,
      subject,
      html: htmlContent,
      attachments: resolvedAttachments,
    });

    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
}
