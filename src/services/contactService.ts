import type { ContactFormState } from "@/lib/validations";

export async function sendContactMessage(values: ContactFormState) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message ?? "Message could not be sent.");
  }

  return result as { ok: true; message: string };
}
