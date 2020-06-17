import { Request, Response } from 'express'
import knex from '../database'

export default {
    
    async index(req: Request, res: Response) {

        const { user_id, page = 1 } = req.query

        try {

            const query = knex('projects').limit(3).offset((Number(page) - 1) * 3)

            const countObj = knex('projects').count()
           
            if(user_id) {
                query.where({ user_id })
                .join('users', 'users.id', '=', 'projects.user_id')
                .select('projects.*', 'users.username')

                countObj.where({ user_id })

            }
            
            const [ count ] = await countObj

            res.header('X-Total-Count', String(count['count']))

            const result = await query

            return res.json(result)
        } catch (error) {
            res.status(500).json({ msg: 'An error ocuried.'})
        }
        
    },

    async create(req: Request, res: Response) {

        const { title, user_id } = req.body

        try {
            
            title && user_id ? 
            await knex('projects').insert({ title, user_id }) : 
            res.status(409).send()
            
            res.json({ msg: 'Project registered.' })
        
        } catch (error) {
            res.status(500).send()
            
        }
    }
}