import { FastifyReply, FastifyRequest } from "fastify";

import { IUser } from "../types/types";
import { TestModel} from "../model/testModel";
/**
 * This files serves a the controller that handles any validation or intermediate process before hitting the database
 */

//Instantiate the 
const testModel = new TestModel();

/**
 * This function passes data to the createUserMd function
 * @param request 
 * @param reply 
 */
export const createUser = async(request: FastifyRequest, reply: FastifyReply):Promise<void>=> {
    try {
        const data = request.body as IUser;
       
        const user = await testModel.createUserMd(data);

        
        reply.code(201).send({data: user})
        
        
    } catch (error) {
        reply.code(500).send(error)
        throw error;
    }

}

/**
 * This function passes data to the getAllUserMd function
 * @param request 
 * @param reply 
 */
export const getAllUsers = async(request: FastifyRequest, reply: FastifyReply): Promise<void>=> {
    try{
        const users = await testModel.getAllUserMd()
        

        reply.code(200).send({data: users})

    } catch(error){
        reply.code(500).send(error)
        throw error;
    }
}

/**
 * This function passes data to the getUserMd function
 * @param request 
 * @param reply 
 * @returns 
 */
export const getUser = async(request: FastifyRequest, reply: FastifyReply): Promise<void> =>{
    try {
        const {Id} = request.params as {Id: string};
    
        const user = await testModel.getUserMd(parseInt(Id));

        if (!user){
            reply.code(404).send("User does not exist")
            return;
        }
        reply.code(200).send({data: user})

        
    } catch (error) {
        reply.code(500).send(error)
        throw error;
    }
} 
/**
 * This function passes data to the deleteUserMd function
 * @param request 
 * @param reply 
 * @returns 
 */
export const deleteUser = async (request: FastifyRequest, reply: FastifyReply) : Promise<void>=>{
    try{
        const {Id} = request.params as {Id: string};
        
        const user = await testModel.deleteUserMd(parseInt(Id));

        if(!user){
            reply.code(404).send("Could not delete user");
            return;
        }

        reply.code(200).send({data: user})
    }
    catch(error){
        reply.code(500).send(error)
        throw error;
    }
}

/**
 * This function passes data to the editUserMd function
 * @param request 
 * @param reply 
 * @returns 
 */
export const editUser = async (request: FastifyRequest, reply: FastifyReply):Promise<void>=>{
    try {
        
        const {id} = request.body as {id: number};
        
        const {email} = request.body as {email: string};

        const user = await testModel.editUserMd(id, email);

        if(!user){
            reply.code(400).send("This data does not exists");
            return;
        }
        
        reply.code(200).send({data: user})
        
    } catch (error) {
        reply.code(500).send(error)
        throw error;
    }
}