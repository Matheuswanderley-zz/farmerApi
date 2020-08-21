
import server from './server'
import farmerApi from './api/farmer-api'
import supportApi from './api/support-api'

import * as path from 'path'
import * as express from 'express'

const assets = server => server.use(
    express.static(
        path.join(path.resolve(), '/assets')))

export default server(express())
    .map(assets)
    .map(supportApi)
    .map(farmerApi)
