import { z } from "zod";

export const startupFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long." })
    .max(100, { message: "Title must not exceed 100 characters." }),

  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long." })
    .max(500, { message: "Description must not exceed 500 characters." }),

  category: z
    .string()
    .min(3, { message: "Category must be at least 3 characters long." })
    .max(20, { message: "Category must not exceed 20 characters." }),

  image: z
    .string()
    .url({ message: "Must be a valid URL." })
    .refine(async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        const contentType = res.headers.get("content-type");
        return contentType?.startsWith("image/");
      } catch {
        return false;
      }
    }, {
      message: "URL must point to a valid image."
    }),

});
