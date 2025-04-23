import { z } from "zod";
export const loginSchema = z.object({
  username: z
    .string()
    .min(6, "Username must be at least 6 characters")
    .nonempty("Username is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
});

export const createCategorySchema = z.object({
  name: z.string().nonempty("Category is required"),
});
