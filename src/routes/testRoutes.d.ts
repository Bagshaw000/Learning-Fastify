import { FastifyInstance } from 'fastify';
/**
 * This is the entry points to the controller folder
 * This is where you define your routes
 * Note use one file per route to keep your code base oraganized
 * @param fastify
 */
export declare const fisrtRouter: (fastify: FastifyInstance) => Promise<void>;
export declare const secondRouter: (fastify: FastifyInstance) => Promise<void>;
