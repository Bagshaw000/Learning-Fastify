"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondRouter = exports.fisrtRouter = void 0;
const testSchema_1 = require("../schema/testSchema");
//This is the entry points to the controller folder
const fisrtRouter = async (fastify) => {
    fastify
        .get('/users/:Id', (req, rep) => { return console.log(req.params); })
        .post('/user', () => { })
        .delete('/users/:Id', () => { })
        .patch('/users/:Id', () => { });
};
exports.fisrtRouter = fisrtRouter;
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
