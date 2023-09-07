import express from 'express'
import productRoute from '../module/product/product.route'

// import { AcademicFaculty } from '../module/academicFaculty/academicFaculty.model'

const routes = express.Router()

const appRoutes = [{ path: '/product', route: productRoute }]

appRoutes.forEach(route => routes.use(route.path, route.route))

export default routes
