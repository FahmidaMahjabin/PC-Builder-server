import { Schema, model } from 'mongoose'
import { Iproduct, productModel } from './product.interface'
import config from '../../config'
import bcrypt from 'bcrypt'
const productSchema = new Schema<Iproduct, productModel>(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    Reviews: {
      type: [String],
    },
    status: {
      type: String,
      enum: ['in stock', 'out of stock'],
    },
    rating: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'CPU',
        'Motherboard',
        'RAM',
        'Power Supply Unit',
        'Storage Device',
        'Monitor',
        'Other',
      ],
    },
    keyFeatures: {
      type: String,
    },
    image_url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
// product.create() and product.save() ei duita function e pre() method use kora jay. create model e and save() model theke instance create kore use korte hoy.
// pre() function ta database e save or create er age kaj kore.
// important note: this use korte hole normal function use korte hobe not arrow function

// productSchema.pre('save', async function (next) {
//   console.log('this from product:', this)
//   this.password = await bcrypt.hash(
//     this.password,
//     Number(config.bcrypt_hash_salt_round)
//   )

//   next()
// })
export const product = model<Iproduct, productModel>('products', productSchema)
