export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function validateContactForm(values: ContactFormState) {
  const errors: Partial<Record<keyof ContactFormState, string>> = {};

  if (!values.name.trim()) errors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email";
  if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim())) errors.phone = "Enter a valid phone number";
  if (values.message.trim().length < 12) errors.message = "Message should be at least 12 characters";

  return errors;
}
