import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwTKPqmYfL1xOIXdfDfYMTp5AAa1QcHdTQgc-cPAxYJ47B01sPuKQP_x6XEx-t7F1IT/exec";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional().default(""),
  message: z.string().trim().min(5, "Please write a message").max(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const receivedAt = new Date().toISOString();

    const body = new URLSearchParams({
      name: data.name,
      email: data.email,
      phone: data.phone ?? "",
      message: data.message,
      submittedAt: receivedAt,
    });

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
      redirect: "follow",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[enquiry] Apps Script failed ${res.status}: ${text.slice(0, 300)}`);
      throw new Error("Enquiry delivery failed");
    }

    return { ok: true as const, receivedAt };
  });
