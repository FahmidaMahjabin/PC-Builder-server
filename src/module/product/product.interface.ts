import { Model, Types } from 'mongoose'
export type Status = 'in stock' | 'out of stock'
export type Category =
  | 'CPU'
  | 'Motherboard'
  | 'RAM'
  | 'Power Supply Unit'
  | 'Storage Device'
  | 'Monitor'
  | 'Other'

export type Iproduct = {
  id: number
  name: string
  description: string
  price: number
  status: Status
  rating: number
  category: Category
  keyFeatures: string
  Reviews: string[]
  image_url: string
}
export type IproductFilter = {
  searchTerm?: string
}
export type productModel = Model<Iproduct, Record<string, never>>
