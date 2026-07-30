export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
};

export function validateContactForm(values: ContactFormState) {
  const errors: Partial<Record<keyof ContactFormState, string>> = {};

  if (!values.name.trim()) errors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email";
  if (!values.subject.trim()) errors.subject = "Subject is required";
  if (!values.projectType.trim()) errors.projectType = "Choose a project type";
  if (values.message.trim().length < 12) errors.message = "Message should be at least 12 characters";

  return errors;
}
