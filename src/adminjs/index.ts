import AdminJs from 'adminjs'
import AdminJsExpress from '@adminjs/express'
import AdminJsSequelize from '@adminjs/sequelize'
import { database } from '../database'
import { adminJsResources } from './resources'
import { locale } from './locale'
import { dashboardOptions } from './dashboard'
import { brandingOptions } from './branding'
import { authtenticationOptions } from './authentication'

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
    databases: [database],
    resources: adminJsResources,
    rootPath: '/admin',
    locale: locale,
    dashboard: dashboardOptions,
    branding: brandingOptions
})



// Fazendo a autenticação onde verifica se o email e a senha dão matche com o DB
export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
    adminJs,
    authtenticationOptions,
    null,
    { resave: false, saveUninitialized: false }
  )