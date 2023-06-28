"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
const client_1 = require("@prisma/client");
/**
 * This class serves as the database query points in the MVC architecture
 *
 */
class TestModel {
    dB;
    //Instantiat the Prisma ORM api
    constructor() {
        this.dB = new client_1.PrismaClient();
    }
    /**
     * This function simulates the CRUD functionality of create
     * @param data
     * @returns
     */
    async createUserMd(data) {
        const { email } = data;
        const newUser = await this.dB.user.create({
            data: {
                email: email,
            },
        });
        await this.dB.$disconnect();
        return newUser;
    }
    /**
     * This function selects all the users in the database
     * @returns
     */
    async getAllUserMd() {
        const getAllUsers = await this.dB.user.findMany();
        await this.dB.$disconnect();
        return getAllUsers;
    }
    /**
     * This function select a user based on the user Id
     * @param Id
     * @returns
     */
    async getUserMd(Id) {
        const getUser = await this.dB.user.findUnique({ where: {
                id: Id
            } });
        await this.dB.$disconnect();
        return getUser;
    }
    /**
     * This function deletes a user from the database based on the user Id
     * @param Id
     * @returns
     */
    async deleteUserMd(Id) {
        const deleteUser = await this.dB.user.delete({ where: {
                id: Id
            } });
        return deleteUser;
    }
    /**
     * This function edits a users information with the user Id
     * @param Id
     * @param email
     * @returns
     */
    async editUserMd(Id, email) {
        const editUser = await this.dB.user.update({
            where: {
                id: Id
            },
            data: {
                email: email
            }
        });
        await this.dB.$disconnect();
        return editUser;
    }
}
exports.TestModel = TestModel;
