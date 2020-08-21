
import logger from '../log'

import * as fs from 'fs'
import * as path from 'path'

const search = params => new Promise((resolve, reject) => { 
    try {
        const data = fs.readFileSync(path.resolve('config/farmer.json'), 'UTF-8')
        const result = JSON.parse(data)
        const resultFiltered = result.filter(i => {
            if (!params || (!params.documentNumber && !params.farmerName)) {
                return true
            }

            const match = i.document.number.startsWith(params.documentNumber) ||
                    i.name.startsWith(params.farmerName)

            console.log('>>> math', match)
            return match
        })

        resolve(resultFiltered)
    } catch (e) {
        logger.error(`Error ${e}`, e)
        reject({ code: 'E001', cause: e })       
    }
})

export { search }