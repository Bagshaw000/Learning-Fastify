"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const testRoutes_1 = require("./src/routes/testRoutes");
const createServer = () => {
    const app = (0, fastify_1.default)();
    //This register your routes 
    app.register(testRoutes_1.fisrtRouter);
    app.register(testRoutes_1.secondRouter);
    return app;
};
exports.default = createServer;
