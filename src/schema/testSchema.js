"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
//This controls the type of data that enter your server
exports.userSchema = typebox_1.Type.Object({
    Id: typebox_1.Type.String(),
});
