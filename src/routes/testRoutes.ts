import { FastifyInstance } from 'fastify';
import { UserType, userSchema } from '../schema/testSchema';


//This is the entry points to the controller folder
//This is where you define your routes 
//Note use one file per route to keep your code base oraganized
export const fisrtRouter =async(fastify:FastifyInstance)=>{
fastify
.get('/users/:Id'
,(req, rep)=>{ return console.log(req.params) } )
.post('/user', ()=>{})
.delete('/users/:Id', () =>{})
.patch('/users/:Id', ()=>{})
}

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