"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondRouter = exports.fisrtRouter = void 0;
const testSchema_1 = require("../schema/testSchema");
const testController_1 = require("../controller/testController");
/**
 * This is the entry points to the controller folder
 * This is where you define your routes
 * Note use one file per route to keep your code base oraganized
 * @param fastify
 */
const fisrtRouter = async (fastify) => {
    fastify
        .get('/user/:Id', testController_1.getUser)
        .post('/user', testController_1.createUser)
        .delete('/user/:Id', testController_1.deleteUser)
        .patch('/user', testController_1.editUser)
        .get('/users', testController_1.getAllUsers);
};
exports.fisrtRouter = fisrtRouter;
//Test the second route
const secondRouter = async (fastify) => {
    fastify
        .get('/sign/:Id', {
        schema: {
            params: testSchema_1.userSchema
        }
    }, (req, res) => {
        res.send("me");
        const { Id } = req.params;
        return console.log(Id);
    });
};
exports.secondRouter = secondRouter;
