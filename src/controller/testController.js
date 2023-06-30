"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = exports.deleteUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
const testModel_1 = require("../model/testModel");
const JWT = __importStar(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const env_1 = __importDefault(require("../../env"));
dotenv_1.default.config({ path: "../../" });
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
        //Implement the JWT functionality 
        const data = request.body;
        // envSecret.config();
        const token = JWT.sign(data, env_1.default.JWT);
        // const user = await testModel.createUserMd(data);
        // reply.code(201).send({data: user})
        console.log(request.headers.cookie);
        reply.code(200).header('set-cookie', token);
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
        const decodeToken = JWT.verify(request.headers.cookie, env_1.default.JWT);
        console.log(decodeToken);
        if (decodeToken) {
            const users = await testModel.getAllUserMd();
            reply.code(200).send({ data: users });
        }
        reply.code(400);
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
