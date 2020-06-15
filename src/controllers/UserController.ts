import { Request, Response } from 'express'
import knex from '../database'

export default {
    async index (req: Request, res: Response) {
        const results = await knex('users')
    
        return res.json(results)
    }
}