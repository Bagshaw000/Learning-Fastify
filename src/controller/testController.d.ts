import { FastifyReply, FastifyRequest } from "fastify";
/**
 * This function passes data to the createUserMd function
 * @param request
 * @param reply
 */
export declare const createUser: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
/**
 * This function passes data to the getAllUserMd function
 * @param request
 * @param reply
 */
export declare const getAllUsers: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
/**
 * This function passes data to the getUserMd function
 * @param request
 * @param reply
 * @returns
 */
export declare const getUser: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
/**
 * This function passes data to the deleteUserMd function
 * @param request
 * @param reply
 * @returns
 */
export declare const deleteUser: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
/**
 * This function passes data to the editUserMd function
 * @param request
 * @param reply
 * @returns
 */
export declare const editUser: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
