import { z } from "zod";

export const ConsultationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(7, "Enter a valid phone number").max(20),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  matterType: z.enum(["CRIMINAL_DEFENSE","BAIL","CYBERCRIME","DIVORCE","MAINTENANCE","DOMESTIC_VIOLENCE","CHILD_CUSTODY","OTHER"]).default("OTHER"),
  briefDescription: z.string().min(10, "Please provide a brief description").max(2000),
  preferredContactMethod: z.string().optional(),
});

export type ConsultationInput = z.infer<typeof ConsultationSchema>;

export const AdminLoginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AdminLoginInput = z.infer<typeof AdminLoginSchema>;

export const StorySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  slug: z.string().min(3).max(200).regex(/^[a-z0-9-]+$/, "Slug must be lowercase with hyphens only"),
  excerpt: z.string().min(10).max(500),
  content: z.string().min(10),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]).default("DRAFT"),
  seoTitle: z.string().max(70).optional(),
  seoDescription: z.string().max(160).optional(),
  coverImage: z.string().url().optional().or(z.literal("")),
  categoryId: z.string().optional(),
});

export type StoryInput = z.infer<typeof StorySchema>;