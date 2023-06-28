import { FastifyInstance } from 'fastify';
import { UserType, userSchema } from '../schema/testSchema';
import { createUser, deleteUser, editUser, getAllUsers, getUser } from '../controller/testController';

/**
 * This is the entry points to the controller folder
 * This is where you define your routes 
 * Note use one file per route to keep your code base oraganized
 * @param fastify 
 */

export const fisrtRouter =async(fastify:FastifyInstance)=>{
fastify
.get('/user/:Id',getUser)
.post('/user',createUser )
.delete('/user/:Id', deleteUser)
.patch('/user', editUser)
.get('/users', getAllUsers)
}

//Test the second route
export const secondRouter = async(fastify:FastifyInstance) =>{
     fastify
     .get('/sign/:Id' ,{
        schema: {
            params: userSchema
        }
     } ,(req, res)=>{
        res.send("me")
        const { Id } = req.params as any;
        return console.log(Id)
     })
}