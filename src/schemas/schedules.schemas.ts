import { z } from "zod";
const schedulesSchemas = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().int().positive(),
  userId: z.number().int().positive(),
});
const scheduleSchemasRequest = schedulesSchemas.omit({
  id: true,
  userId: true,
});
const scheduleSchemasResponse = z.object({
  id: z.number(),
  date: z.string().or(z.date()),
  hour: z.string(),
  user: z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullish(),
  }),
  realEstate: z.object({
    id: z.number(),
    value: z.number().or(z.string()).default(0),
    size: z.number().positive(),
    sold: z.boolean().default(false).optional(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    categoryId: z.number(),
    addressId: z.number(),
  }),
});
export { schedulesSchemas, scheduleSchemasResponse, scheduleSchemasRequest };
