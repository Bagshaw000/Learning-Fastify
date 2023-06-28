"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = exports.deleteUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const testModel_1 = require("../model/testModel");
/**
 * This files serves a the controller that handles any validation or intermediate process before hitting the database
 */
//Instantiate the 
const testModel = new testModel_1.TestModel();
/**
 * This function passes data to the createUserMd function
 * @param request
 * @param reply
 */
const createUser = async (request, reply) => {
    try {
        const data = request.body;
        console.log(data);
        const user = await testModel.createUserMd(data);
        reply.code(201).send({ data: user });
    }
    catch (error) {
        reply.code(500).send(error);
        throw error;
    }
};
exports.createUser = createUser;
/**
 * This function passes data to the getAllUserMd function
 * @param request
 * @param reply
 */
const getAllUsers = async (request, reply) => {
    try {
        const users = await testModel.getAllUserMd();
        reply.code(200).send({ data: users });
    }
    catch (error) {
        reply.code(500).send(error);
        throw error;
    }
};
exports.getAllUsers = getAllUsers;
/**
 * This function passes data to the getUserMd function
 * @param request
 * @param reply
 * @returns
 */
const getUser = async (request, reply) => {
    try {
        const { Id } = request.params;
        const user = await testModel.getUserMd(parseInt(Id));
        if (!user) {
            reply.code(404).send("User does not exist");
            return;
        }
        reply.code(200).send({ data: user });
    }
    catch (error) {
        reply.code(500).send(error);
        throw error;
    }
};
exports.getUser = getUser;
/**
 * This function passes data to the deleteUserMd function
 * @param request
 * @param reply
 * @returns
 */
const deleteUser = async (request, reply) => {
    try {
        const { Id } = request.params;
        const user = await testModel.deleteUserMd(parseInt(Id));
        if (!user) {
            reply.code(404).send("Could not delete user");
            return;
        }
        reply.code(200).send({ data: user });
    }
    catch (error) {
        reply.code(500).send(error);
        throw error;
    }
};
exports.deleteUser = deleteUser;
/**
 * This function passes data to the editUserMd function
 * @param request
 * @param reply
 * @returns
 */
const editUser = async (request, reply) => {
    try {
        const { id } = request.body;
        const { email } = request.body;
        const user = await testModel.editUserMd(id, email);
        if (!user) {
            reply.code(400).send("This data does not exists");
            return;
        }
        reply.code(200).send({ data: user });
    }
    catch (error) {
        reply.code(500).send(error);
        throw error;
    }
};
exports.editUser = editUser;
