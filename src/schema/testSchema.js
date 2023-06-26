"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.userSchema = typebox_1.Type.Object({
    Id: typebox_1.Type.String(),
});
