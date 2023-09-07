import { z } from 'zod'

import { ObjectId } from 'mongodb'
import { category, status } from './product.constant'
const createproductZodSchema = z.object({
  body: z.object({
    id: z.number({
      required_error: 'id is required',
    }),
    name: z.string({
      required_error: 'name is required',
    }),
    category: z.enum([...category] as [string, ...string[]], {
      required_error: 'category is required',
    }),
    status: z.enum([...status] as [string, ...string[]], {
      required_error: 'status is required',
    }),
    rating: z.number({
      required_error: 'rating is required',
    }),
    Reviews: z.string().array().optional(),
    keyFeatures: z.string().optional(),
    price: z.number({ required_error: 'price is required' }),
    description: z.string({ required_error: 'description is required' }),
    image_url: z.string({ required_error: 'image is required' }),
  }),
})

const updateproductZodSchema = z.object({
  body: z
    .object({
      title: z
        .string({
          required_error: 'title is required',
        })
        .optional(),
      author: z
        .string({
          required_error: 'author is required',
        })
        .optional(),
      genre: z
        .string({
          required_error: 'genre is required',
        })
        .optional(),
      publicationDate: z
        .string({
          required_error: 'date is required',
        })
        .optional(),
      reviews: z.string().array().optional(),
    })
    .optional(),
})
export const productValidation = {
  createproductZodSchema,
  updateproductZodSchema,
}
