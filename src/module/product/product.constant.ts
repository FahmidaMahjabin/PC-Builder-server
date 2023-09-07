import { Category, Status } from './product.interface'

export const filterableFields = ['searchTerm', 'genre', 'publicationDate']
export const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder']
export const searchableFields = ['title', 'genre', 'author']
export const category: Category[] = [
  'CPU',
  'Motherboard',
  'RAM',
  'Power Supply Unit',
  'Storage Device',
  'Monitor',
  'Other',
]
export const status: Status[] = ['in stock', 'out of stock']
