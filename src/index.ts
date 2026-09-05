import path from "node:path";
import { transporter } from "./utils/mailer.js";

export { transporter };

export interface Attachment {
  filename: string;
  path: string;
  cid?: string; // For embedding images in HTML
  contentType?: string; // Optional: specify MIME type
}

export interface EmailProviderFields {
  displayName?: string;
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
    const resolvedAttachments = attachments.map((att) => ({
      ...att,
      path: path.isAbsolute(att.path)
        ? att.path
        : path.resolve(process.cwd(), att.path),
    }));

    const fromAddress = displayName
      ? `"${displayName}" <otp.providers@gmail.com>`
      : "otp.providers@gmail.com";

    const info = await transporter.sendMail({
      from: fromAddress,
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

export default emailProvider;
