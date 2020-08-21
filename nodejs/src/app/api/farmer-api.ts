
import Api from '.'
import * as farmerService from '../service/farmer-service'

import * as express from 'express'

const URI = '/farmers'

class FarmerApi implements Api {
    routes() {
        return express.Router()
            .get('/:id', (req, res, next) => {
                res.json({ health: 'OK' })
            })
            .get('/', (req, res, next) => {
                const documentNumber = req.query.documentNumber
                const farmerName = req.query.farmerName

                farmerService.search({ documentNumber: documentNumber, farmerName: farmerName })
                    .then(data => res
                        .json(data))
                    .catch(e => res
                        .status(400)
                        .json(e))
            })
    }
}

const api = new FarmerApi()

export default server => server.use(URI, api.routes())