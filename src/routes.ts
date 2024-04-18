// Criando as rotas
// A ordem das rotas é importante

import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/courseController'

const router = express.Router()

router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

router.get('/courses/featured', coursesController.featured)
router.get('/courses/:id', coursesController.show)

export { router }