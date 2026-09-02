import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "Please write a message").max(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const receivedAt = new Date().toISOString();

    // Admin notification payload — name, email, message, date & time.
    console.log(
      `[enquiry] ${receivedAt} | ${data.name} <${data.email}> | ${data.message.slice(0, 500)}`,
    );

    return { ok: true as const, receivedAt };
  });
