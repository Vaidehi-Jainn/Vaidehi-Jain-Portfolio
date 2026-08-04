export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function validateContactForm(values: ContactFormState) {
  const errors: Partial<Record<keyof ContactFormState, string>> = {};

  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email";
  if (!values.phone.trim()) errors.phone = "Mobile number is required";
  else if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim())) errors.phone = "Enter a valid phone number";
  if (!values.message.trim()) errors.message = "Message is required";

  return errors;
}
