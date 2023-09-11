import { Iproduct, IproductFilter } from './product.interface'
import { product } from './product.model'

import config from '../../config/index'

import mongoose from 'mongoose'
import { ApiError } from '../../errrorHandlers/ApiErrorHandler'

import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { IResponseForPagination } from '../../interfaces/pagination'
import { searchableFields } from './product.constant'
const addproduct = async (productdata: Iproduct): Promise<Iproduct | null> => {
  const result = await product.create(productdata)

  return result
}

const getAllproducts = async (filters: IproductFilter): Promise<Iproduct[]> => {
  const { searchTerm, ...filterableFields } = filters
  console.log('filterableFields:', filterableFields)
  const andConditions = []

  // add searchTerm to the andCondition
  if (searchTerm) {
    andConditions.push({
      $or: searchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filterableFields).length) {
    andConditions.push({
      $or: Object.entries(filterableFields).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }
  console.log('andConditions:', andConditions)

  // search condition
  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}
  const result = await product.find(whereCondition).sort('dec').limit(10)

  return result
}
const getCategorizedProduct = async (category: string) => {
  const result = await product.find({ category: category })
  return result
}
const getSingleproduct = async (id: string) => {
  const result = await product.findOne({ id: Number(id) })
  return result
}
const updateproduct = async (id: ObjectId, updateData: Partial<Iproduct>) => {
  const result = await product.findOneAndUpdate({ _id: id }, updateData, {
    new: true,
  })
  console.log('reslt:', result)
  return result
}
const deleteproduct = async (id: ObjectId) => {
  const result = await product.findByIdAndDelete(id)
  return result
}
export const productServices = {
  addproduct,
  getAllproducts,
  getSingleproduct,
  updateproduct,
  deleteproduct,
  getCategorizedProduct,
}
