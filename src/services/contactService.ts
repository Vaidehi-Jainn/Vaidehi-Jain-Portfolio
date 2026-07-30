import type { ContactFormState } from "@/lib/validations";

export async function sendContactMessage(values: ContactFormState) {
  await new Promise((resolve) => window.setTimeout(resolve, 700));

  return {
    ok: true,
    message: `Thanks ${values.name}. Connect this service to an API or email provider when ready.`,
  };
}
