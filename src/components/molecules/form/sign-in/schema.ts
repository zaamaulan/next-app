import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});
