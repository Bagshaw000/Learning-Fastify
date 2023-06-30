import { FastifyReply, FastifyRequest } from "fastify";

import { IUser } from "../types/types";
import { TestModel} from "../model/testModel";
import * as JWT from "jsonwebtoken" ;
import dotenv from 'dotenv';
import endpoint from '../../env';

dotenv.config({path: "../../"});

/**
 * This files serves a the controller that handles any validation or intermediate process before hitting the database
 */

//Instantiate the 
const testModel = new TestModel();

/**
 * This function passes data to the createUserMd function and implements the JWT sign function
 * @param request 
 * @param reply 
 */
export const createUser = async(request: FastifyRequest, reply: FastifyReply):Promise<void>=> {
    try {
        //Implement the JWT functionality 
        const data = request.body as IUser;
        // envSecret.config();

        const token =  JWT.sign(data,endpoint.JWT as JWT.Secret  )
       
        // const user = await testModel.createUserMd(data);

        
        // reply.code(201).send({data: user})
        console.log(request.headers.cookie) 
        reply.code(200).header('set-cookie', token )
        
        
    } catch (error) {
        reply.code(500).send(error)
        throw error;
    }

}

/**
 * This function passes data to the getAllUserMd function and implemented the JWT verify function
 * @param request 
 * @param reply 
 */
export const getAllUsers = async(request: FastifyRequest, reply: FastifyReply): Promise<void>=> {
    try{

        //Decoed the JwT hash and returns a string 
        //In other to verify if this person is authenticated we have to check if the value is equal
        // to the original value (using cache or saving the data in some place where we can get it
        // for the comparision)
        
        const decodeToken = JWT.verify(request.headers.cookie as string, endpoint.JWT as JWT.Secret );
        console.log(decodeToken);
        if(decodeToken){
            const users = await testModel.getAllUserMd();
            reply.code(200).send({data: users});
        }

        reply.code(400)


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