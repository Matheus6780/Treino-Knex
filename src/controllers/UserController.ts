import { Request, Response } from 'express'
import knex from '../database'
import { NextFunction } from 'express'



export default {
    
    async index (req: Request, res: Response) {
        const results = await knex('users')
    
        return res.json(results)
    },

    async create(req: Request, res: Response, next: NextFunction) {

        const { username } = req.body

        try {
            if (!username) return res.status(400).send()

            const existedUser = await knex('users').where({ username }).select('username')
            
            if (existedUser.length > 0) {
                const [ { username: personName } ] = existedUser
                return res.status(409).json({ msg: `Username ${personName} already exists.` })
            }

            await knex('users').insert({ username })
            
            return res.status(201).send()
            

        } catch (error) {
            console.log(error)
            return res.json(error)
            
        }
        
    },

    async update(req: Request, res: Response) {

        const { id } = req.params
        const { username } = req.body

        try {

            if (!username || !id) return res.status(400).send()

            const existedUser = await knex('users').select('username').where({ id })

            const [ { username: personName } ] = existedUser

            await knex('users').update({ username }).where({ id })

            res.json({ msg: `${personName} changed to ${username}.` })

        } catch (error) {
            console.log(error)
            return res.json(error)
        }
    },

    async delete(req: Request, res: Response) {

        const { id } = req.params
        
        try {
            if (!id) return res.status(400).send()

            await knex('users').where({ id }).del()

            return res.send()

        } catch (error) {
            console.log(error)
            res.json(error)

        }
    }
}