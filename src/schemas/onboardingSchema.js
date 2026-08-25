import { z } from 'zod';

export const personalInfoSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(60, 'That name looks too long — please shorten it.'),
  age: z.coerce
    .number({ invalid_type_error: 'Please enter a valid age.' })
    .int('Age must be a whole number.')
    .min(13, 'You must be at least 13 years old.')
    .max(110, 'Please enter a realistic age.'),
  gender: z.string().min(1, 'Please select an option.'),
});

export const accountFieldsSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Please enter a valid email address.'),
  username: z
    .string()
    .trim()
    .min(3, 'Username must be at least 3 characters.')
    .max(20, 'Username must be under 20 characters.')
    .regex(/^[a-zA-Z0-9_]+$/, 'Use letters, numbers, and underscores only.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  confirmPassword: z.string().min(1, 'Please confirm your password.'),
});

export const accountDetailsSchema = accountFieldsSchema.refine(
  (data) => data.password === data.confirmPassword,
  { message: 'Passwords do not match.', path: ['confirmPassword'] }
);

export const onboardingSchema = z
  .object({
    ...personalInfoSchema.shape,
    ...accountFieldsSchema.shape,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
